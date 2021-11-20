<template>
  <v-navigation-drawer
    absolute
    bottom
    app
    clipped-left
    permanent
  >
    <v-list>
      <v-list-item link v-for="item in items" :key="item">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
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
          icon: 'mdi-home',
          title: 'Dashboard'
        },
        {
          icon: 'mdi-account',
          title: 'User'
        },
        {
          icon: 'mdi-view-list',
          title: 'List'
        },
        {
          icon: 'mdi-cog',
          title: 'Settings'
        },
        {
          icon: 'mdi-information',
          title: 'About Us'
        },
      ]
    }),
  }
</script>