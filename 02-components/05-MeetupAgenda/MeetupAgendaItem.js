import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      agendaItemMod: {
        ...this.agendaItem,
        'icon': `/assets/icons/icon-${getAgendaItemIcons()[this.agendaItem.type]}.svg`,
        typeTitle: getAgendaItemDefaultTitles()[this.agendaItem.type]
      }
    }
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaItemMod.icon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItemMod.startsAt }} - {{ agendaItemMod.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ agendaItemMod.title ? agendaItemMod.title : agendaItemMod.typeTitle }}</h5>
        <p v-if="agendaItemMod.type === 'talk'">
          <span>{{ agendaItemMod.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItemMod.language }}</span>
        </p>
        <p>{{ agendaItemMod.description }}</p>
      </div>
    </div>`,
};
