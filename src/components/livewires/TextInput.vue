<template>
  <div :class="[size, classes]" class="field">
    <label :for="id">{{ label }} <span v-if="optional">(optional)</span></label>
    <p v-if="hint" class="font-size-1 m0" v-html="hint"></p>
    <textarea
      v-if="type === 'textarea'"
      ref="input"
      :id="id"
      :name="name"
      :class="['align-' + align, 'input--' + kind, border + '-border']"
      @focus="$event.target.select()"
      @input="updateValue($event.target.value)"
    ></textarea>
    <input
      v-else
      ref="input"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :class="['align-' + align, 'input--' + kind, border + '-border']"
      @focus="$event.target.select()"
      @input="updateValue($event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    label: '',
    hint: '',
    id: '',
    name: '',
    value: '',
    size: '',
    classes: '',
    border: {
      default: 'grey'
    },
    type: {
      default: 'text'
    },
    kind: '',
    align: '',
    placeholder: '',
    optional: false
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
.field {
  padding-bottom: var(--line);
  width: 100%;
}
.field label {
  font-size: var(--font-size-3);
  display: block;
  white-space: nowrap;
  overflow: ellipsis;
  max-width: 90%;
  font-weight: var(--bold);
}
.field label span {
  font-size:0.667em;
}
textarea,
input {
  font-size: var(--font-size-3);
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  padding: calc(var(--line) / 4);
  border-radius: var(--radius);
  width:100%;
  outline:none;
  margin-top: calc(var(--line) / 4);
  font-weight: var(--regular);
  background: var(--white);
  font-family: var(--sans);
}
textarea:focus,
input:focus {
  border: var(--border);
}
.field.small label {
  font-size: var(--font-size-3);
}
@media (min-width: 48em) {
  .field.small label {
    font-size: var(--font-size-2);
  }
}
.field.small textarea,
.field.small input {
  border-radius: 0;
  background: transparent;
  padding: calc(var(--line) / 8);
}
.field.large label {
  font-size: var(--font-size-4);
}
.field.large textarea,
.field.large input {
  font-size: var(--font-size-4);
  padding: calc(var(--line) / 2);
}
</style>
