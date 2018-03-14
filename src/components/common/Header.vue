<template>
  <header class="grid grid-columns-5 header py1">
    <div>
      <router-link :to="{ name: 'Index' }">{{ title }}</router-link>
    </div>
    <nav class="grid-column-span-4 justify-items-end align-right">
      <router-link :to="{ name: 'Typography' }">Typography</router-link>
      <router-link :to="{ name: 'Layout' }">Layout</router-link>
      <router-link :to="{ name: 'Colour' }">Colour</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.header {
  margin-left: calc(var(--line) / 2);
  margin-right: calc(var(--line) / 2);
}
@media (min-width: 36em) {
  .header {
    margin-left: calc(var(--line) * 1);
    margin-right: calc(var(--line) * 1);
  }
}
@media (min-width: 48em) {
  .header {
    margin-left: calc(var(--line) * 2);
    margin-right: calc(var(--line) * 2);
  }
}
</style>
