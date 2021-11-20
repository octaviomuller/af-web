<template>
  <v-app>
    <navigation-drawer></navigation-drawer>

    <app-bar></app-bar>

    <v-main>
      <h1>Hello World</h1>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import NavigationDrawer from './components/NavigationDrawer.vue'

export default {
  name: 'App',

  components: {
    AppBar,
    NavigationDrawer
  },

  data: () => ({
    //
  }),
};
</script>
