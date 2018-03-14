<template>
  <header>
    <div>
      <router-link :to="{ name: 'Index' }">{{ title }}</router-link>
    </div>
    <nav>
      <router-link :to="{ name: 'Typography' }">Typography</router-link>
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
