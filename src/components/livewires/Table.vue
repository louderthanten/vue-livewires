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

  ul,
  ol,
  dl,
  p {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }
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

thead,
tfoot {
  th,
  td {
    vertical-align: bottom;
  }
}

.axis-title {
  border: none;
}

.overflow-x table {
  width: 99%;
}

.table--bordered{
  th,
  td{
    border: var(--rule, 1px solid black);

    &:empty{
      border: none;
    }
  }
  @media only screen and (max-width: 48em) {
    td {
      border-top: none;
    }
  }
}

.table--lined {
  tr {
    border-bottom: var(--rule, 1px solid black);
  }
  th,
  td {
    &:first-child,
    &:first-child {
      padding-left: 0;
    }
    &:last-child,
    &:last-child {
      padding-right: 0;
    }
  }
  tbody:first-child {
    tr:first-child {
      border-top: var(--rule, 1px solid black);
    }
  }
  thead {
    tr {
      border-bottom: var(--rule, 1px solid black);
      border-top: none;
    }
  }
  tfoot {
    th,
    td {
      padding-bottom: 0;
    }
  }
}

.table--striped {
  tbody {
    tr:nth-child(odd) td {
      background: var(--grey, grey);
    }
  }
}

@media only screen and (max-width: 48em) {
  table {
    tr {
      width: 100%;
    }
  }
  .table--mobile {
    tbody,
    tfoot,
    tbody th,
    tbody td,
    tbody tr {
      display: block !important;
    }
    thead {
      display: none;
    }
    thead,
    tfoot,
    tbody,
    tr {
      clear: both;
    }
      tr {
      overflow: hidden;
    }
    td {
      float: left;
      padding-top: 0;
      margin-bottom: 0;
    }
    td:before {
      content: attr(data-label);
      display: block;
    }
  }

  .numeric,
  .numerical,
  .delete,
  td.price {
    text-align: left;
  }
  td.numerical,
  td.numeric {
    text-transform: uppercase;
  }
}
</style>
