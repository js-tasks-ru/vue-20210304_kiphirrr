import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  data() {
    return {
      count: 0
    }
  },

  methods: {
    incCount(event) {
      this.count++;
    }
  }
});

app.$mount('#app');
