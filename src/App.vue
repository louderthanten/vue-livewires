<template>
  <div id="app">
    <app-header :title="title"></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/common/Header'

export default {
  name: 'App',
  data () {
    return {
      title: 'Live Wires'
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style>
  @import './assets/css/livewires.css';
</style>
