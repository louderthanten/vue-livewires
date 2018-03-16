<template>
  <div :class="size" class="field">
    <label :for="id" v-if="label">{{ label }} <span v-if="optional">(optional)</span></label>
    <select
      :id="id"
      :name="name"
      v-model="val"
      class="select"
      @input="updateValue($event.target.value)"
    >
      <option :value="null">{{ placeholder }}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val: ''
    }
  },
  props: {
    label: '',
    id: '',
    name: '',
    value: '',
    placeholder: '',
    options: {
      type: Array
    },
    size: '',
    optional: false
  },
  watch: {
    value (selected) {
      this.val = selected
    }
  },
  mounted () {
    this.val = this.value
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  label {
    margin-bottom: calc(var(--line) * 0.25);
  }
  select {
    font-size: var(--font-size-3);
    position: relative;
    -webkit-appearance:none;
    -moz-appearance:none;
    border-radius: var(--tight-radius);
    background-color: var(--white);
    background-image: url('/static/img/arrow-down.svg');
    background-size: 1em 1em;
    background-repeat: no-repeat;
    background-position: calc(100% + 1.5em) center;
    background-origin: content-box;
    border: none;
    padding: var(--line);
    display:block;
    border: var(--border);
    padding: 0.3667em 2em 0.36667em 0.5em;
    margin: 0;
    cursor: pointer;
    font-family: var(--sans);
    color: var(--black);
  }
  .small select {
    font-size: var(--font-size-2);
    padding: 0.25em 2em 0.25em 0.25em;
  }
  .large select {
    font-size: var(--font-size-5);
    padding: 0.5em 2em 0.5em 0.5em;
  }
</style>
