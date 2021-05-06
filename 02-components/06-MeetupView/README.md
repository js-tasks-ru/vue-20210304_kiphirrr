# MeetupView

В задаче требуется только собрать все компоненты вместе и добавить одно вычисляемое свойство на получение ссылки на изображение митапа при его наличии.

```javascript
export default {
  name: 'MeetupView',

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  computed: {
    coverLink() {
      return this.meetup.imageId && getImageUrlByImageId(this.meetup.imageId);
    },
  },

  template: `
    <div>
      <meetup-cover :link="coverLink" :title="meetup.title"></meetup-cover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="new Date(meetup.date)"></meetup-info>
          </div>
        </div>
      </div>
    </div>`,
```