<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <router-link :to="{ name: 'home' }">
          <v-list-item
            link
          >
            <v-list-item-action>
              <v-icon>mdi-history</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'multiple-component' }">
          <v-list-item
            link
          >
            <v-list-item-action>
              <v-icon>mdi-pen</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Multiple Component
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'tabbed-elements' }">
          <v-list-item
            link
          >
            <v-list-item-action>
              <v-icon>mdi-tab</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Tabbed Elements
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      app
      dense
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content >
      <router-view class="fill-height"></router-view>
    </v-content>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
  }),
  //   beforeCreate: function () {
  //   if (!this.$session.exists()) {
  //     this.$router.push('/login');
  //   }
  // },
  // methods: {
  //   logout: function () {
  //     this.$session.destroy();
  //     this.$router.push('/login');
  //   }
  // }
};
</script>
