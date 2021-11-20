<template>
  <v-footer fixed app padless>
    <v-card flat tile width="100%" class="text-center orange darken-2">
      <v-card-text class="py-1">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="py-1">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-email", "mdi-twitter", "mdi-linkedin"],
  }),
};
</script>
