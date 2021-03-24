export default {
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  model: {
    prop: 'count',
    event: 'increment'
  },

  methods: {
    increment(value) {
      this.$emit('increment', ++value);
    }
  },

  template: '<button type="button" :value="count" @click="increment(count)">{{ count }}</button>',
};
