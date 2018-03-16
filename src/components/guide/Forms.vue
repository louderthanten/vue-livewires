<template>
  <div class="page">
    <h1>Forms</h1>
    <section>
      <h2>Text fields</h2>
      <lw-form>
        <lw-text-input
          :label="'Text input'"
        ></lw-text-input>
        <lw-text-input
          :label="'Number input'"
          :type="'number'"
        ></lw-text-input>
        <lw-text-input
          :label="'URL input'"
          :type="'url'"
          :optional="'true'"
        ></lw-text-input>
        <lw-text-input
          :label="'Email input'"
          :type="'email'"
        ></lw-text-input>
        <lw-text-input
          :label="'Number input'"
          :type="'number'"
        ></lw-text-input>
        <lw-text-input
          :label="'Textarea input'"
          :type="'textarea'"
        ></lw-text-input>
      </lw-form>
    </section>
    <section>
      <h2>Option fields</h2>
      <lw-select-input
        :label="'Default select'"
        :placeholder="'Select one'"
        :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"
      ></lw-select-input>
      <lw-select-input
        :label="'Small select'"
        :placeholder="'Select one'"
        :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"
        :size="'small'"
      ></lw-select-input>
      <lw-select-input
        :label="'Large select'"
        :placeholder="'Select one'"
        :options="['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']"
        :size="'large'"
      ></lw-select-input>
    </section>
    <section>
      <h2>Buttons</h2>
      <button>Default button</button>
      <button class="small-button">Small button</button>
      <button class="large-button">Large button</button>
      <button class="square-button">Square button</button>
      <button class="pill-button">Pill button</button>
      <button class="ghost-button">Ghost button</button>
      <button class="full-button">Full-width button</button>
      <button class="white-button">White button</button>
      <button class="black-button">Black button</button>
      <button class="grey-button">Grey button</button>
      <button class="red-button">Red button</button>
      <button class="green-button">Green button</button>
      <button class="blue-button">Blue button</button>
      <button class="accent-button">Accent button</button>
      <button class="accent2-button">Accent 2 button</button>
    </section>
  </div>
</template>

<script>
import Form from '../livewires/Form'
import TextInput from '../livewires/TextInput'
import SelectInput from '../livewires/SelectInput'

export default {
  components: {
    lwForm: Form,
    lwTextInput: TextInput,
    lwSelectInput: SelectInput
  }
}
</script>
