<template>
  <v-container>
    <v-row class="pa-6" dense v-for="(statement, index) in statements" :key="index">
      <v-col cols="12">
        <v-card>
         <v-card-title
            class="text-h5"
          >
            {{ statement.value }}
            <v-spacer></v-spacer>
            <v-icon :color="statement.incoming ? 'green' : 'red'">
              {{ statement.incoming ? 'mdi-plus' : 'mdi-minus'}}
            </v-icon>
          </v-card-title>

          <v-card-subtitle>{{ statement.description }}</v-card-subtitle>
          <v-card-text>{{ statement.date }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  computed: {
    statements() {
      return this.$store.state.bankStatement
    }
  }
}
</script>