<template>
  <div class="overflow-x">
    <table :class="[size, 'table--' + type]" :id="id">
      <thead v-if="xTitle || headings">
        <tr v-if="xTitle"><th></th><th :colspan="spanLength" class="text-center axis-title">{{ xTitle }}</th></tr>
        <tr>
          <th v-for="(heading, i) in headings" :class="cellStyle(i)" :key="i">{{ heading }}</th>
        </tr>
      </thead>
      <template v-if="draggable">
        <slot></slot>
      </template>
      <tbody v-else>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    id: '',
    size: '',
    type: '',
    xTitle: '',
    headings: {
      type: Array
    },
    draggable: {
      type: Boolean,
      default: false
    },
    alignment: {
      type: Array,
      default: null
    },
    widths: {
      type: Array,
      default: null
    }
  },
  computed: {
    spanLength () {
      return this.headings.length - 1
    }
  },
  methods: {
    cellStyle (i) {
      let align = ''
      let width = ''
      if (this.alignment) {
        align = 'align-' + this.alignment[i]
      }
      if (this.widths) {
        width = ' t' + this.widths[i]
      }
      return align + width
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: var(--line, 1.5rem);
}

table ul,
table ol,
table dl,
table p {
  margin-bottom: 0;
}
[colspan="1"]{
  text-align: left;
}
[rowspan]{
  vertical-align: middle;
}
[rowspan="1"]{
  vertical-align: top;
}

td,
th {
  vertical-align: top;
}

.numeric,
.numerical {
  text-align: right;
}

thead th,
thead td,
tfoot th,
tfoot td {
  vertical-align: bottom;
}

.axis-title {
  border: none;
}

.overflow-x table {
  width: 99%;
}

.table--bordered th,
.table--bordered td {
  border: var(--rule, 1px solid black);
}
.table--bordered th:empty,
.table--bordered td:empty {
  border: none;
}

.table--lined tr {
  border-bottom: var(--rule, 1px solid black);
}
.table--lined th:first-child,
.table--lined td:first-child {
  padding-left: 0;
}
.table--lined th:last-child,
.table--lined td:last-child {
  padding-right: 0;
}

.table--lined tbody tr:first-child {
  border-top: var(--border);
}
.table--lined thead tr {
  border-bottom: var(--rule, 1px solid black);
  border-top: none;
}
.table--lined tfoot th,
.table--lined tfoot td {
  padding-bottom: 0;
}

.table--striped tbody tr:nth-child(odd) td{
  background: var(--grey, grey);
}

@media only screen and (max-width: 48em) {
  table tr {
    width: 100%;
  }
  .table--mobile tbody,
  .table--mobile tfoot,
  .table--mobile tbody th,
  .table--mobile tbody td,
  .table--mobile tbody tr {
    display: block !important;
  }
  .table--mobile thead {
    display: none;
  }
  .table--mobile thead,
  .table--mobile tfoot,
  .table--mobile tbody,
  .table--mobile tr {
    clear: both;
  }
  .table--mobile tr {
    overflow: hidden;
  }
  .table--mobile td {
    float: left;
    padding-top: 0;
    margin-bottom: 0;
  }
  .table--mobile td:before {
    content: attr(data-label);
    display: block;
  }

  .table--mobile .numeric,
  .table--mobile .numerical,
  .table--mobile .delete,
  .table--mobile td.price {
    text-align: left;
  }
  .table--mobile td.numerical,
  .table--mobile td.numeric {
    text-transform: uppercase;
  }
}
</style>
