import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
  methods: {
    incValue(event) {
      event.target.innerHTML++;
    }
  }
});

app.$mount('#app');
