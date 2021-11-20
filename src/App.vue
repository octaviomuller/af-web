<template>
  <v-app>
    <system-bar></system-bar>

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
import SystemBar from './components/SystemBar.vue'

export default {
  name: 'App',

  components: {
    AppBar,
    NavigationDrawer,
    SystemBar
  },

  data: () => ({
    //
  }),
};
</script>
