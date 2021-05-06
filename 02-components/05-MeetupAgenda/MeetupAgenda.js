import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  components: {
    MeetupAgendaItem,
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item
        v-for="agendaItem in agenda"
        :key="agendaItem.id"
        :agenda-item="agendaItem"
        class="meetup-agenda__item"
      ></meetup-agenda-item>
    </div>`,
};
