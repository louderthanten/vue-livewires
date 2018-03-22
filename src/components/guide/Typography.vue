<template>
  <div class="page">
    <h1>Typography</h1>
    <section class="grid" id="typefaces" :style="color">
      <h2>Typefaces</h2>
      <hr>

      <h3>System sans</h3>
      <app-type-sample :font="'sans'" :title="'Regular 400'" :weight="'regular'"></app-type-sample>
      <app-type-sample :font="'sans'" :title="'Bold 700'" :weight="'bold'"></app-type-sample>

      <h3>System serif</h3>
      <app-type-sample :font="'serif'" :title="'Regular 400'" :weight="'regular'"></app-type-sample>
      <app-type-sample :font="'serif'" :title="'Bold 700'" :weight="'bold'"></app-type-sample>

      <h3>System Mono</h3>
      <app-type-sample :font="'mono'" :italic="false" :title="'Regular 400'" :weight="'regular'"></app-type-sample>
      <app-type-sample :font="'mono'" :italic="false" :title="'Bold 700'" :weight="'bold'"></app-type-sample>
    </section>
    <section class="grid">
      <h2>Font sizes</h2>
      <lw-table
        :type="'lined'"
      >
        <tr><td class="font-size-1 sans"><p class="measure">This is a lead paragraph. It is emphasised to bring readers into an article. Let’s add a sexy & character. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p><td><td>.font-size-1</td></tr>
        <tr><td class="font-size-2 sans"><p class="measure">This is a lead paragraph. It is emphasised to bring readers into an article. Let’s add a sexy & character. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p><td><td>.font-size-2</td></tr>
        <tr><td class="font-size-3 bold display">Handgloves at Font size 3<br>A second line to test heights<td><td>.font-size-3</td></tr>
        <tr><td class="font-size-3 sans"><p class="measure">This is a lead paragraph. It is emphasised to bring readers into an article. Let’s add a sexy & character. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p><td><td>.font-size-3 (default)</td></tr>
        <tr><td class="font-size-4 bold display">Handgloves at Font size 4<br>A second line to test heights<td><td>.font-size-4</td></tr>
        <tr><td class="font-size-4 sans"><p class="measure">This is a lead paragraph. It is emphasised to bring readers into an article. Let’s add a sexy & character. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p><td><td>.font-size-4</td></tr>
        <tr><td class="font-size-5 bold display">Handgloves at Font size 5<br>A second line to test heights<td><td>.font-size-5</td></tr>
        <tr><td class="font-size-6 bold display">Handgloves at Font size 6<br>A second line to test heights<td><td>.font-size-6</td></tr>
        <tr><td class="font-size-7 bold display">Handgloves at Font size 7<br>A second line to test heights<td><td>.font-size-7</td></tr>
        <tr><td class="font-size-8 bold display">Handgloves at Font size 8<br>A second line to test heights<td><td>.font-size-8</td></tr>
        <tr><td class="font-size-8 medium condensed">Handgloves at Font size 8<br>A second line to test heights<td><td>.font-size-8</td></tr>
        <tr><td class="font-size-9 bold display">Handgloves at Font size 9<td><td>.font-size-9</td></tr>
        <tr><td class="font-size-9 medum extra-condensed">Handgloves at Font size 9<br>A second line to test heights<br>1234567890<td><td>.font-size-9</td></tr>
        <tr><td class="font-size-10 bold display">Handgloves at font size 10<td><td>.font-size-10</td></tr>
        <tr><td class="font-size-10 medium extra-condensed">Font size 10<br>1234567890<td><td>.font-size-10</td></tr>
      </lw-table>
    </section>
    <section class="grid grid-2col-sm my6">
      <div class="col-span-2-sm">
        <h2>Headings</h2>
        <hr>
      </div>
      <div>
        <h1>Heading one</h1>
        <h2>Heading two</h2>
        <h3>Heading three</h3>
        <h4>Heading four</h4>
        <h5>Heading five</h5>
        <h6>Heading six</h6>
      </div>
      <div>
        <h1><a href="">Heading one</a></h1>
        <h2><a href="">Heading two</a></h2>
        <h3><a href="">Heading three</a></h3>
        <h4><a href="">Heading four</a></h4>
        <h5><a href="">Heading five</a></h5>
        <h6><a href="">Heading six</a></h6>
      </div>
  </section>

  <section class="row" id="paragraphs">
    <h2>Paragraphs</h2>
    <hr>
    <div class="content paragraphs">
      <p class="lead">This is a lead paragraph. It is emphasised to bring readers into an article. Let&rsquo;s add a sexy <i class="amp">&amp;</i> character. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.</p>

      <p>Here are some paragraphs. This is the meat of our content and where we most of our typographic decisions live. Look inside the following paragraphs for examples of <a href="">links</a>, <strong>bold text</strong>, and <em>italics</em>. Here is a foonote reference<sup><a href="#fn1">*</a></sup></p>

      <p>Donec id elit <abbr title="Hypertext Markup Language" class="acr">HTML</abbr> non mi porta <em>gravida at eget</em> metus. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et <strong>magnis dis parturient</strong> montes, nascetur ridiculus mus.</p>

      <p>Integer posuere erat a ante <a href="">venenatis dapibus</a> posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

      <p>Duis mollis, est non <a href="">commodo luctus</a>, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <strong>Vivamus sagittis</strong> lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

      <p id="fn1"><small><sup>*</sup> Here is some fine print. It can be used for the little stuff, like this footnote.</small></p>

      <h1>Primary page heading</h1>

      <p>Donec id elit <abbr title="Hypertext Markup Language" class="acr">HTML</abbr> non mi porta <em>gravida at eget</em> metus. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et <strong>magnis dis parturient</strong> montes, nascetur ridiculus mus.</p>

      <h2>Secondary heading</h2>

      <p>Duis mollis, est non <a href="">commodo luctus</a>, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

      <h3>Third heading</h3>

      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <strong>Vivamus sagittis</strong> lacus vel augue laoreet rutrum faucibus dolor auctor.</p>

      <h4>Fourth heading</h4>

      <p>Integer posuere erat a ante <a href="">venenatis dapibus</a> posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

      <h5>Fifth heading</h5>

      <p>Donec id elit <abbr title="Hypertext Markup Language" class="acr">HTML</abbr> non mi porta <em>gravida at eget</em> metus. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et <strong>magnis dis parturient</strong> montes, nascetur ridiculus mus.</p>

      <h6>Sixth heading</h6>

      <p>Integer posuere erat a ante <a href="">venenatis dapibus</a> posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>

    </div>

    <p class="more"><a href="#header" class="js-scroll">To top</a></p>
  </section>

  <section class="row" id="quotes">
    <h2>Quotes</h2>
    <hr>
    <p>This is some text with an <q>inline quote</q> inside of it.</p>

    <blockquote>
      <p>This is a blockquote. We use this when quoting others or displaying testimonials.</p>
      <small class="source"><a href="">Source Name</a> in <cite title="Publication"><a href="">Publication</a></cite></small>
    </blockquote>

    <p class="more"><a href="#header" class="js-scroll">To top</a></p>
  </section>

  <section class="row" id="reverse">
    <h2>Reverse text</h2>
    <hr>
    <p>Add a <code>reverse</code> class to any element to invert the colours of the text and its background.</p>

    <div class="p1 reverse">
      <p>Callout content is a related aside that doesn&rsquo;t fit directly inside normal page content. It may also my use to highlight important sections. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
    </div>

    <p class="more"><a href="#header" class="js-scroll">To top</a></p>
  </section>

  <section class="row" id="lists">
    <h2>Lists</h2>
    <hr>

    <div class="split-content">
      <ul>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item
          <ul>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
          </ul>
        </li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
        <li>Unordered list item</li>
      </ul>

      <ol>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
        <li>Ordered list item</li>
      </ol>
    </div>

    <div class="split-content">
      <dl>
        <dt>Definition title</dt>
        <dd>Definition description. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</dd>
        <dt>Definition title</dt>
        <dd>Definition description. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</dd>
        <dt>Definition title</dt>
        <dd>Definition description. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</dd>
      </dl>
    </div>

    <p class="more"><a href="#header" class="js-scroll">To top</a></p>
  </section>

  <section class="row" id="misc">
    <h2>Misc</h2>
    <hr>

    <div class="split-content">
      <h3>Time stamp</h3>
      <time datetime="2011-01-12">January 12<sup>th</sup>, 2011</time>
      <hr>

      <h3>Price</h3>
      <p class="price">$100.00</p>
      <p class="price price--large">$100.00</p>
      <hr>

      <h3>More links</h3>
      <p class="more"><a href="">Read more</a></p>
    </div>

  </section>
  </div>
</template>

<script>
import Table from '../livewires/Table'
import TypeSample from './components/TypeSample'

export default {
  data () {
    return {
      color: '--black: #ff0044;'
    }
  },
  components: {
    lwTable: Table,
    appTypeSample: TypeSample
  }
}
</script>
