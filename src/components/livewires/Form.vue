<template>
  <form :action="action">
    <fieldset>
      <slot></slot>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: {
    action: ''
  }
}
</script>

<style>
form {
  padding: 0;
  margin-bottom: var(--line);
}
fieldset {
  margin: 0;
  padding: 0;
  border: none;
}
</style>
