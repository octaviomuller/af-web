<template>
  <v-app>
    <app-bar></app-bar>

    <v-main>
      <h1>Hello World</h1>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>
