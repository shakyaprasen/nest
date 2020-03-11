<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        {{msg}}
      </v-col>

      <v-col class="mb-4">

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
export default {
  name: 'HelloWorld',
  props: ['msg'],
};
</script>
