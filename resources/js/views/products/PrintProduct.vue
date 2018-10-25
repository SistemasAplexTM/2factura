<template lang="html">
  <div class="">
    <el-button @click="printPDF()">IMPRIMIR</el-button>
  </div>
</template>

<script>
import { urlPrint, print, createPDF } from '@/api/product'
import { getConfig } from '@/api/config'

export default {
  data(){
    return {
      url: '',
      printer_product: '',
      format_print: ''
    }
  },
  created(){
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
    printPDF(){
      let me = this
      createPDF(me.format_print).then(({data}) => {
        var name = data
        print(me.url).then(({data}) => {
          var exe = eval(data.substring(21))
          exe.print('useDefaultPrinter=0&printerName='+me.printer_product+'&printRotation=None&fileName='+name);
        }).catch((error) => { console.log(error) })
      }).catch((error) => console.log(error))
    }
  }
}
</script>
