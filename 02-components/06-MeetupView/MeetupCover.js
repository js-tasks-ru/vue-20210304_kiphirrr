export default {
  name: 'MeetupCover',

  props: {
    link : {
      type: String,
      default: null
    },
    title: String
  },

  template: `
    <div class="meetup-cover"  :style="link ? \`--bg-url: url('\${link}')\` : null">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
