<template>
  <v-navigation-drawer absolute bottom app clipped permanent>
    <v-list>
      <v-list-item link class="pb-4">
        <v-list-item-content>
          <v-list-item-title class="text-h6"> José Alencar </v-list-item-title>
          <v-list-item-subtitle>jose.alencar87@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link v-for="item in items" :key="item">
        <v-list-item-icon>
          <v-icon color="orange darken-2">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "mdi-home",
        title: "Home",
      },
      {
        icon: "mdi-chart-line",
        title: "Estatísticas",
      },
      {
        icon: "mdi-cash-multiple",
        title: "Pagamentos",
      },
      {
        icon: "mdi-bitcoin",
        title: "Investimentos",
      },
      {
        icon: "mdi-cog",
        title: "Ajustes",
      },
      {
        icon: "mdi-information",
        title: "Dúvidas",
      },
    ],
  }),
};
</script>