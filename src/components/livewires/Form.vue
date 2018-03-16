<template>
  <form>
    <fieldset>
      <slot></slot>
    </fieldset>
  </form>
</template>

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
