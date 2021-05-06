<template>
  <button type="button" @click="increment(count)">{{ count }}</button>
</template>

<script>
export default {
  name: 'CounterButton',

  model: {
    prop: 'count',
    event: 'increment',
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    increment(value) {
      this.$emit('increment', value + 1);
    },
  },
};
</script>

<style></style>
