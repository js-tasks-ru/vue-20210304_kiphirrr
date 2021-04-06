import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
  name: 'MeetupView',

  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  computed: {
    meetupCover() {
      if (!this.meetup.imageId) {
        return false;
      }

      return getImageUrlByImageId(this.meetup.imageId);
    }
  },

  template: `
    <div>
      <meetup-cover :link="meetupCover" :title="meetup.title"/>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"/>

            <h3>Программа</h3>
            <meetup-agenda :agenda="meetup.agenda"/>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="new Date(meetup.date)"/>
          </div>
        </div>
      </div>
    </div>`,
};
