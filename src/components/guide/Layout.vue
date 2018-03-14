<template>
  <div class="page">
    <h1>Layout</h1>
    <section>
      <h2>Basic grids</h2>
     <h3>One column grid</h3>
      <div class="grid grid-columns-1">
        <div class="item"></div>
      </div>
      <h3>Two column grid</h3>
      <div class="grid grid-columns-2">
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Three column grid</h3>
      <div class="grid grid-columns-3 grid-gap-1">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Four column grid</h3>
      <div class="grid grid-columns-4">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Five column grid</h3>
      <div class="grid grid-columns-5">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Six column grid</h3>
      <div class="grid grid-columns-6">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Seven column grid</h3>
      <div class="grid grid-columns-7">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Eight column grid</h3>
      <div class="grid grid-columns-8">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Nine column grid</h3>
      <div class="grid grid-columns-9">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Ten column grid</h3>
      <div class="grid grid-columns-10">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Eleven column grid</h3>
      <div class="grid grid-columns-11">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
      <h3>Twelve column grid</h3>
      <div class="grid grid-columns-12">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item">asdfasdfasdf</div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </section>
    <section>
      <h2>Grid gaps</h2>
      <h3>No gap</h3>
      <div class="grid grid-columns-4 grid-gap-0">
        <div class="item blue"></div>
        <div class="item green"></div>
        <div class="item black"></div>
        <div class="item"></div>
      </div>
      <h3>Hairline gap</h3>
      <div class="grid grid-columns-4 grid-gap-hair">
        <div class="item blue"></div>
        <div class="item green"></div>
        <div class="item black"></div>
        <div class="item"></div>
      </div>
      <h3>Half gap</h3>
      <div class="grid grid-columns-4 grid-gap-05">
        <div class="item blue"></div>
        <div class="item green"></div>
        <div class="item black"></div>
        <div class="item"></div>
      </div>
      <h3>Normal gap</h3>
      <div class="grid grid-columns-4 grid-gap-1">
        <div class="item blue"></div>
        <div class="item green"></div>
        <div class="item black"></div>
        <div class="item"></div>
      </div>
      <h3>Double gap</h3>
      <div class="grid grid-columns-4 grid-gap-2">
        <div class="item blue"></div>
        <div class="item green"></div>
        <div class="item black"></div>
        <div class="item"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .grid {
    grid-template-rows: repeat(1, calc(var(--line) * 4));
  }
  .item {
    background-color: var(--accent);
  }
</style>
