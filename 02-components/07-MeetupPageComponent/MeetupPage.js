import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
  name: 'MeetupPage',

  components: {
    MeetupView,
  },

  data() {
    return {
      meetup: null,
    };
  },

  mounted() {
    this.fetch();
  },

  methods: {
    async fetch() {
      this.meetup = await fetchMeetup(MEETUP_ID);
    },
  },

  template: `
    <div>
      <meetup-view v-if="meetup" :meetup="meetup" />
    </div>`,
};
