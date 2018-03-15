<template>
  <div :class="[weight, font]" class="mb3">
    <h4>{{ title }}</h4>
    <p class="font-size-9 mt05 mb1">AaBbCc1234</p>
    <p class="font-size-5 mb1">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
    abcdefghijklmnopqrstuvwxyz<br />
    1234567890<br />
    #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</p>

    <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
    abcdefghijklmnopqrstuvwxyz<br />
    1234567890<br />
    #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</p>

    <template v-if="italic">
    <h4 class="mt2">{{ title }} italic</h4>
    <p class="font-size-9 mt05 mb1"><em>AaBbCc1234</em></p>
    <p class="font-size-5 mb1"><em>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
    abcdefghijklmnopqrstuvwxyz<br />
    1234567890<br />
    #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</em></p>

    <p><em>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
    abcdefghijklmnopqrstuvwxyz<br />
    1234567890<br />
    #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</em></p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
    weight: '',
    font: '',
    italic: {
      default: true
    }
  }
}
</script>
