<template>
  <div class="swatch p2" :style="{ backgroundColor: hex }">
    <h3 class="m0">{{ name }}</h3>
    <div v-if="hex"><strong>Hex:</strong> {{ hex }}</div>
    <div v-if="rgb"><strong>RGB:</strong> {{ rgb }}</div>
    <div v-if="hsla"><strong>HSLA:</strong> {{ hsla }}</div>
    <div v-if="cmyk"><strong>CMYK:</strong> {{ cmyk }}</div>
    <div v-if="pms"><strong>PMS:</strong> {{ pms }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: '',
    hex: '',
    rgb: '',
    hsla: '',
    cmyk: '',
    pms: ''
  }
}
</script>
