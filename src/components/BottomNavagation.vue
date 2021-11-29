<template>
  <v-bottom-navigation app background-color="orange">
    <v-btn v-for="(icon, index) in icons" :key="index" class="mx-4" icon>
      <v-icon size="24px">
        {{ icon }}
      </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-email", "mdi-twitter", "mdi-linkedin"],
  }),
};
</script>