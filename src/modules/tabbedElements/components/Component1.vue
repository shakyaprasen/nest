
<template>
  <div>
    <v-card
    class="mb-12"
    color="grey lighten-1"
    height="auto"
  >
  <v-app id="inspire">
    <v-form v-model="valid">
      <v-container>
        <v-row>

          <v-col
            md="4"

          >
    First Name
          </v-col>
    <v-col
            cols="4"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="first name"
              height="10"
              class="styled-input"
              id="styled-input"
              solo
              required


            ></v-text-field>
          </v-col>

        </v-row>
        <v-row>

            <v-col
            cols="4"
            class="mt-n9"
          >
   Last Name
          </v-col>

        <v-col
            cols="4"


          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>

   <v-col
           md="4"
          >
      भवन ऐन अनुसार भवनको वर्गिकरण
          </v-col>

          <v-col
           md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
   <v-col
            cols="12"
            md="4"
          >
       भवनको संरचना प्रणाली
          </v-col>

          <v-col
           md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
   <v-col
           md="4"
          >
     भवनको लम्बाइ
          </v-col>

          <v-col
           md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
          <v-col
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
   <v-col
          md="4"
          >
       भवनको चौडाई
          </v-col>

          <v-col
           md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              height="10"
              solo
              class="mt-n9"
            ></v-text-field>
          </v-col>
             <v-col
             md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
   <v-col
            cols="12"
            md="4"
          >
     भवनको कुल उचाइ
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
               <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
          <v-row>
   <v-col
            cols="12"
            md="4"
          >
      भवनको तला
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
    </v-form>
  </v-app>

  </v-card>
    <v-btn
      color="primary"
      @click="nextStep(1)"
    >
      Continue
    </v-btn>

    <v-btn text>Cancel</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    nextStep: {
      type: Function,
    },
  },
};
</script>

<style scoped>
#styled-input {
  height: 40px;
  font-size: 20pt;
}
.styled-input label[for] {
  height: 40px;
  font-size: 20pt;
}
</style>
