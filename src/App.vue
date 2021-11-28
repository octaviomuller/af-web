<template>
  <v-app>
    <SystemBar></SystemBar>

    <AppBar :pages="pages"></AppBar>

    <NavigationDrawer :pages="pages"></NavigationDrawer>

    <Footer></Footer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    AppBar,
    NavigationDrawer,
    Footer,
  },

  data: () => ({
    pages: [
      {
        name: 'Home',
        path: '/',
        icon: 'mdi-home'
      },
      {
        name: 'Bank Statements',
        path: '/statements',
        icon: 'mdi-piggy-bank-outline'
      },
      {
        name: 'Investments',
        path: '/investments',
        icon: 'mdi-chart-line'
      },
      {
        name: 'Cards',
        path: '/cards',
        icon: 'mdi-credit-card-outline'
      }
    ]
  }),
};
</script>
