<template>
  <div class="pa-10">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="n in steps">
          <v-stepper-step
            :key="`${n}-step`"
            :step="n"
            editable
          >
            Step {{ n }}
          </v-stepper-step>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
        >
          <component :is="getComponent(n)" :next-step="nextStep" />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>

import Component1 from './components/Component1.vue';
import Component2 from './components/Component2.vue';
import Component3 from './components/Component3.vue';
import Component4 from './components/Component4.vue';

const COMPONENT_MAP = {
  1: 'Component1',
  2: 'Component2',
  3: 'Component3',
  4: 'Component4',
};

export default {
  name: 'TabbedElements',
  data() {
    return {
      e1: 1,
      steps: 4,
    };
  },
  components: {
    Component1,
    Component2,
    Component3,
    Component4,
  },
  watch: {
    steps(val) {
      if (this.e1 > val) {
        this.e1 = val;
      }
    },
  },

  methods: {
    getComponent(n) {
      return COMPONENT_MAP[n];
    },
    nextStep(n) {
      if (n === this.steps) {
        this.e1 = 1;
      } else {
        this.e1 = n + 1;
      }
    },
  },
};
</script>
