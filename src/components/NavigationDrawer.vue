<template>
  <v-navigation-drawer absolute bottom app clipped permanent>
    <v-list>
      <v-list-item link class="pb-4">
        <v-list-item-content>
          <v-list-item-title class="text-h6"> José Alencar </v-list-item-title>
          <v-list-item-subtitle>jose.alencar87@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link v-for="page in pages" :key="page" @click="redirect(page.path)">
        <v-list-item-icon>
          <v-icon color="orange darken-2">{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ page.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    redirect(route) {
      console.log(route)
      this.$router.push(route)
    }
  }
}
</script>