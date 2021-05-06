# MeetupDescription

Требуется добавить один входной параметр и выводить его значение в содержимом `.meetup-description`.

```javascript
export default {
  name: 'MeetupDescription',
  
  props: {
    description: String,
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
};
```
