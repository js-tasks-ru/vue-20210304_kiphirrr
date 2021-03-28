export default {
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
      default: 'Описание должно быть здесь'
    }
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
};
