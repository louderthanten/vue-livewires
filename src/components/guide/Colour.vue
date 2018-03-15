<template>
  <div class="page grid grid-columns-3_sm">
    <h1 class="grid-column-full">Colour</h1>
    <app-colour-swatch :name="'White'" :hex="'white'"></app-colour-swatch>
    <app-colour-swatch :name="'Grey'" :class="'white-text'" :hex="'grey'"></app-colour-swatch>
    <app-colour-swatch :name="'Black'" :class="'white-text'" :hex="'black'"></app-colour-swatch>
    <app-colour-swatch :name="'Red'" :class="'white-text'" :hex="'red'"></app-colour-swatch>
    <app-colour-swatch :name="'Blue'" :class="'white-text'" :hex="'blue'"></app-colour-swatch>
    <app-colour-swatch :name="'Green'" :class="'white-text'" :hex="'green'"></app-colour-swatch>
  </div>
</template>

<script>
import ColourSwatch from './components/ColourSwatch'

export default {
  components: {
    appColourSwatch: ColourSwatch
  }
}
</script>
