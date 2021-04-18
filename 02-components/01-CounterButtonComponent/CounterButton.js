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
      this.$emit('increment', value + 1);
    }
  },

  template: '<button type="button" @click="increment(count)">{{ count }}</button>',
};
