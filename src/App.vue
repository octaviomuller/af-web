<template>
  <v-app>
    <SystemBar></SystemBar>

    <AppBar></AppBar>

    <NavigationDrawer></NavigationDrawer>

    <Footer></Footer>

    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",

  components: {
    AppBar,
    NavigationDrawer,
    Footer,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
