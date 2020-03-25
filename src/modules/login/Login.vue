<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex class="justify-center"  >
        <v-card style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')" height="500px"></v-card>
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card >
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
            <v-text-field v-model="username" name="username" label="Username"></v-text-field>
            <v-text-field  v-model="password" name="password" label="Password" type="password">
            </v-text-field>
            <v-card-actions>
              <v-btn primary large block v-on:click="authenticate">Login</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { VueAxios } from '@/plugins/axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      token: '',

    };
  },

  mounted() {
  },
  //   methods: {
  //   authenticate:function(){
  //        const url = 'http://localhost/backend/login.php';
  //        if(response.status==200){
  //              this.$router.push({ name: 'home' });
  //   return;
  //        }

  //   }
  //   }
  methods: {
    authenticate() {
      const url = '/backend/login.php';
      VueAxios.post(url, { username: this.username, password: this.password })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ name: 'home' });
          }
          this.token = response.data.token;
          window.localStorage.setItem('token', this.token);
          //    if (response.data.success) {
          //        this.getTaskList();
          //        if (typeof (response.data.message) === 'undefined') {
          //            alert("Task is saved.");
          //        }
          //        else {
          //            alert(response.data.message);
          //        }
          //        this.showModal = false;
          //    }
          // alert(response.status);

          //    this.posts = response.data;
          //    alert(this.posts);
          //    else {
          //    alert(this.posts);
          //    }
        });
    },
  },

};
</script>
