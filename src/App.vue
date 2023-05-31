<template>
  <v-app id="inspire">
    <v-navigation-drawer
        app
        v-model="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-card
              class="mx-auto p-5"
          >
          </v-card>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
        >
          <v-list-item-icon>
            <v-icon color="indigo">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Kaan</v-list-item-title>
            <v-list-item-subtitle>Baş</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content>
            <v-btn outlined>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar
        app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          href="https://github.com/kaannbass"
          target="_blank"
          icon
          color="black"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
          href="https://www.linkedin.com/in/kaannbass/"
          target="_blank"
          icon
          color="primary"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="bg">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: null,
    items: [
      {title: 'Ana sayfa', icon: 'mdi-home', to: "/"},
     // {title: 'Favoriler', icon: 'mdi-book-heart', to: "/favoriler"},
    ],
    right: null,
  }),
};
</script>

<style scoped>
.bg {
  background-color: #dfe1e2;
}

</style>
