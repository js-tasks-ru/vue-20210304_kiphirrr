import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Функция, возвращающая словарь заголовков по умолчанию для всех типов пунктов программы
 */
const getAgendaItemDefaultTitles = () => ({
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
});

/**
 * Функция, возвращая словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const getAgendaItemIcons = () => ({
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
});

const app = new Vue({
  data() {
    return {
      rawMeetup: null
    }
  },

  computed: {
    meetup() {
      let meetup = this.rawMeetup;

      if (!meetup) {
        return null;
      }

      if (meetup.imageId) {
        meetup.imgUrl = getImageUrlByImageId(meetup.imageId);
      }

      if (meetup.date) {
        meetup.formatDate = this.formatDate(meetup.date);
        meetup.isoDate = new Date(meetup.date).toISOString().substring(0, 10);
      }

      if (meetup.agenda) {
        meetup.agenda = meetup.agenda.map((agendaItem) => ({
            ...agendaItem,
            'typeTitle': getAgendaItemDefaultTitles()[agendaItem.type],
            'icon': `/assets/icons/icon-${getAgendaItemIcons()[agendaItem.type]}.svg`
          })
        );
      }

      return meetup;
    }
  },

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },

  mounted() {
    fetch(`${API_URL}/meetups/${MEETUP_ID}`).
    then((res) => res.json()).
    then((meetup) => {
      this.rawMeetup = meetup;
    });
  }
});

app.$mount("#app");
