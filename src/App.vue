<template>
  <v-app >
    <router-view>
    </router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
