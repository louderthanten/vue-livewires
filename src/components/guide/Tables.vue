<template>
  <div class="page">
    <h1>Tables</h1>
    <section>
      <h2>Default</h2>
      <lw-table
        :headings="['A', 'B', 'C']"
        :alignment="['left', 'left', 'left']"
      >
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </lw-table>
    </section>
    <section>
      <h2>Bordered</h2>
      <lw-table
        :headings="['A', 'B', 'C']"
        :alignment="['left', 'left', 'left']"
        :type="'bordered'"
      >
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </lw-table>
    </section>
    <section>
      <h2>Lined</h2>
      <lw-table
        :headings="['A', 'B', 'C']"
        :alignment="['left', 'left', 'left']"
        :type="'lined'"
      >
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </lw-table>
    </section>
    <section>
      <h2>Striped</h2>
      <lw-table
        :headings="['A', 'B', 'C']"
        :alignment="['left', 'left', 'left']"
        :type="'striped'"
      >
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </lw-table>
    </section>
  </div>
</template>

<script>
import Table from '../livewires/Table'

export default {
  components: {
    lwTable: Table
  }
}
</script>
