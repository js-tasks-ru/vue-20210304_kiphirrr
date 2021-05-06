# MeetupAgenda

В `MeetupAgendaItem` понадобится добавить пару вычисляемых свойств. В остальном в задачах нет новых сложностей.

```javascript
// MeetupAgenda.js

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

```

```javascript
// MeetupAgendaItem.js

import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return this.agendaItem.title || getAgendaItemDefaultTitles()[this.agendaItem.type];
    },

    icon() {
      return `icon-${getAgendaItemIcons()[this.agendaItem.type]}.svg`;
    },
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="\`/assets/icons/\${icon}\`" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{ title }}</h5>
        <p v-if="agendaItem.speaker">
          <span>{{ agendaItem.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
};
```
