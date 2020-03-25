<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2">
        <v-btn depressed small @click="accordionState = !accordionState">Show/Hide</v-btn>
      </v-col>
      <v-col cols="10">
        <AccordionEx v-if="accordionState"/>
      </v-col>

      <v-col class="mb-4">
        <ProfileCard />
        <router-view></router-view>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import { VueAxios } from '@/plugins/axios';
import AccordionEx from './components/AccordionEx.vue';
import ProfileCard from './components/test.vue';

export default {
  name: 'MultipleComponents',
  components: {
    AccordionEx,
    ProfileCard,
  },
  data: () => ({
    accordionState: true,
  }),
  methods: {
    fetchData() {
      const url = 'http://localhost/backend/fetch.php';
      VueAxios.get(url)
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ name: 'home' });
          }
          this.token = response.data.token;
          window.localStorage.setItem('token', this.token);
        });
    },
  },
};
</script>
