import Vue from './vendor/vue.esm.browser.js';



const app = new Vue({
  data() {
    return {
      meetupId: "",
      meetupTitle: ""
    };
  },

  methods: {
    getMeetup(id) {
      fetch("https://course-vue.javascript.ru/api/meetups/" + id).
        then((res) => res.json()).
        then((meetup) => {
          this.meetupTitle = meetup.title;
        });
    }
  },

  watch: {
    meetupId(meetupId) {
      this.getMeetup(meetupId);
    }
  }
});

app.$mount("#app");
