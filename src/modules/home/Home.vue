<template>
  <div class="home d-flex flex-column align-center">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  // mounted() {
  //   const { id } = this.$route.params;
  //   console.log(process.env.VUE_APP_BASE_URL);
  //   // if (!id) {
  //   //   this.$router.push({ name: 'multiple-component' });
  //   //   return;
  //   // }
  //   fetch(`${process.env.VUE_APP_BASE_URL}/api/customer/${id}`)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.customer = response.data;
  //     })
  //     .catch((e) => console.error(e));
  // },
};
</script>
