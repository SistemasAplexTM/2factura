<template lang="html">
  <div class="">
    <div id="card">
      <h1 style="font-size: 30px">{{ product.code }}</h1>
      <h2>{{ product.name }}</h2>
    </div>
    <el-button @click="aPDF()">IMPRIMIR</el-button>
    <div id="img-out"></div>
  </div>
</template>

<script>
import { urlPrint, print, byId } from '@/api/product'
import { getConfig } from '@/api/config'

export default {
  data(){
    return {
      query: '',
      url: '',
      printer_product: '',
      format_print: '',
      product: []
    }
  },
  created(){

    byId(1).then(({data}) => {
      this.product = data
    }).catch((error) => { console.log(error) })

    urlPrint().then(({data}) => {
      this.url = data
    }).catch((error) => { console.log(error) })

    getConfig('product_printer').then(({data}) => {
      this.printer_product = data.value
    }).catch((error) => { console.log(error) })

    getConfig('test_format_print').then(({data}) => {
      this.format_print = data.value
    }).catch((error) => { console.log(error) })
  },
  methods: {
    aPDF(){
      let me = this
      var pdf = new jsPDF('p', 'pt', 'letter');
      // var source = $('#card')[0];
      var source = me.format_print;
      // var source = Test;

      var specialElementHandlers = {
        '#bypassme': function (element, renderer) {
          return true
        }
      };
      var margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
      };

      pdf.fromHTML(
        source,
        margins.left, // x coord
        margins.top, { // y coord
          'width': margins.width,
          'elementHandlers': specialElementHandlers
        },
        function (dispose) {
          var tales = pdf.output('datauristring');
          $.ajax({
              type: "POST",
              url: "api/product/createFile",
              data: { base64ImageContent : tales},
              success: function (name) {
                  print(me.url).then(({data}) => {
                    this.query = data.substring(21)
                    var exe = eval(this.query)
                    exe.print('useDefaultPrinter=0&printerName='+me.printer_product+'&printRotation=None&fileName='+name);
                  }).catch((error) => {
                    console.log(error);
                  })
              }
          });
        }, margins
      )
    }
  }
}
</script>

<style lang="css">
</style>
