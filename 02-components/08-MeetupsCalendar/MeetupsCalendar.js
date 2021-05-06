const LOCALE = navigator.language;

function countDaysOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function applyFuncToDate (dateStr, arFunc) {
  for (let func of arFunc) {
    let f = func[0];
    dateStr = f.call(new Date(dateStr), func[1]);
  }

  return dateStr;
}

export const MeetupsCalendar = {
  name: 'MeetupsCalendar',

  props: {
    meetups: {
      type: Array,
      required: true,
    }
  },

  data() {
    return {
      date: new Date(),
      deltaDay: LOCALE == "ru-RU" ? 1 : 1 /* 0 */,
    };
  },

  computed: {
    meetups_() {
      return this.meetups.map(
        (meetup) => ({
          ...meetup,
          'dayStr': new Date(meetup.date).toDateString(),
        })
      );
    },

    calendarLabel() {
      let month = this.date.toLocaleString(LOCALE, {month: 'long',});
      month = month.charAt(0).toUpperCase() + month.substr(1);
      let year = this.date.toLocaleString(LOCALE, {year: 'numeric',});

      return `${month} ${year}`;
    },

    firstDayOfMonth() {
      return new Date(this.date).setDate(1);
    },

    lastDayOfMonth() {
      return new Date(this.date).setDate(countDaysOfMonth(this.date.getFullYear(), this.date.getMonth()));
    },

    currentMontDays() {
      let arDays = [];

      let dayOfFirstDay = new Date(this.firstDayOfMonth).getDay() - this.deltaDay;

      if(dayOfFirstDay < 0) {
        dayOfFirstDay = 6;
      }

      let dayOfLastDay = new Date(this.lastDayOfMonth).getDay() - this.deltaDay;

      if(dayOfLastDay < 0) {
        dayOfLastDay = 6;
      }

      for (let i = 0; i <= dayOfFirstDay - 1; i++) {
        let day = countDaysOfMonth(this.date.getFullYear(), this.date.getMonth() - 1) - i;
        arDays.unshift({
          day: day,
          dayStr: applyFuncToDate(
            this.date,
            [
              [new Date().setDate, day],
              [new Date().setMonth, this.date.getMonth() - 1],
              [new Date().toDateString, undefined]
            ]
          ),
          active: false,
        });
      }

      for (let i = 1; i <= countDaysOfMonth(this.date.getFullYear(), this.date.getMonth()); i++) {
        arDays.push({
          day: i,
          dayStr: applyFuncToDate(
            this.date,
            [
              [new Date().setDate, i],
              [new Date().setMonth, this.date.getMonth()],
              [new Date().toDateString, undefined]
            ]
          ),
          active: true,
        });
      }

      for (let i = 1; i <= 6 - dayOfLastDay; i++) {
        arDays.push({
          day: i,
          dayStr: applyFuncToDate(
            this.date,
            [
              [new Date().setDate, i],
              [new Date().setMonth, this.date.getMonth() + 1],
              [new Date().toDateString, undefined]
            ]
          ),
          active: false,
        });
      }

      arDays = arDays.map(
        (day) => ({
          ...day,
          meetups: this.meetups_.filter(
            (meetup) => {
              if (meetup.dayStr == day.dayStr) {
                return true;
              }

              return false;
            }
          ),
        })
      );

      return arDays;
    },
  },

  methods: {
    monthShift(delta) {
      let deltaYear = 0;
      let month = this.date.getMonth();
      month += delta;

      if(month > 11 || month < 0) {
        if (month > 0) {
          deltaYear = Math.floor((month + 1) / 12);
        } else {
          deltaYear = Math.ceil((month + 1) / 12);
        }

        this.date = new Date(this.date.setFullYear(this.date.getFullYear() + deltaYear));
        month = month % 12;
      }

      let countDaysOfNewMonth = countDaysOfMonth(this.date.getFullYear() + deltaYear, month);

      if(this.date.getDate() + 1 > countDaysOfNewMonth) {
        this.date = new Date(this.date.setDate(countDaysOfNewMonth - 1));
      }

      this.date = new Date(this.date.setMonth(month));
    },
  },

  template: `<div class="rangepicker">
    <div class="rangepicker__calendar">
      <div class="rangepicker__month-indicator">
        <div class="rangepicker__selector-controls">
          <button class="rangepicker__selector-control-left" @click="monthShift(-1)"></button>
          <div>{{ calendarLabel }}</div>
          <button class="rangepicker__selector-control-right" @click="monthShift(1)"></button>
        </div>
      </div>
      <div class="rangepicker__date-grid">
        <!--<div class="rangepicker__cell rangepicker__cell_inactive">28</div>
        <div class="rangepicker__cell rangepicker__cell_inactive">29</div>
        <div class="rangepicker__cell rangepicker__cell_inactive">30</div>
        <div class="rangepicker__cell rangepicker__cell_inactive">31</div>
        <div class="rangepicker__cell">
          1
          <a class="rangepicker__event">Митап</a>
          <a class="rangepicker__event">Митап</a>
        </div>
        <div class="rangepicker__cell">2</div>
        <div class="rangepicker__cell">3</div>-->
        <div v-for="day in currentMontDays" :key="JSON.stringify(day)" class="rangepicker__cell" :class="{'rangepicker__cell_inactive': !day.active}">
          {{ day.day }}
          <template v-if="day.meetups">
            <a v-for="meetup in day.meetups" :key="meetup.id" class="rangepicker__event">{{ meetup.title }}</a>
          </template>
        </div>
      </div>
    </div>
  </div>`,
};
