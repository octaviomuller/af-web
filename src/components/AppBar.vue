<template>
  <v-app-bar app clipped-left elevation="0" color="orange darken-2">
    <v-img contain max-width="120" src="../assets/logo_inter.png"></v-img>

    <v-spacer></v-spacer>

    <v-btn icon v-for="page in pages" :key="page" @click="redirect(page.path)">
      <v-icon color="white">{{ page.icon }}</v-icon>
    </v-btn>
  </v-app-bar>
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