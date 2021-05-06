import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem
  },

  props: {
    agenda : Array
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="agendaItem in agenda" :agenda-item="agendaItem" :key="agendaItem.listId"></meetup-agenda-item>
    </div>`,
};
