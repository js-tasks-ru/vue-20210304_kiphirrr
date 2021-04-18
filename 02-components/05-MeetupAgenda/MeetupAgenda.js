import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda : {
      type: Array,
      required: true
    }
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="agendaItem in agenda" :agenda-item="agendaItem" :key="agendaItem.id"></meetup-agenda-item>
    </div>`,
};
