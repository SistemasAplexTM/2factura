<template lang="html">
  <div class="">
    <el-row :gutter="15">
      <el-col :span="24">
        <router-link :to="{ path: 'productos/nuevo'}">
          <el-button icon="el-icon-plus" type="success" size="small">Crear</el-button>
        </router-link>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="15">
        <el-col :span="24">
          <vue-table class="box"
            path="api/product/init"
            @destroy="destroy"
            @print="print"
            @updateCell="update"
            id="product"
            ref="product"
            />
        </el-col>
    </el-row>
  </div>
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue'
import { urlPrint, print, createPDF } from '@/api/product'
import { getConfig } from '@/api/config'

export default {
  components: { VueTable },
  data: function () {
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
    print(val){
      let me = this
      createPDF(me.format_print, val.dtRowId).then(({data}) => {
        var name = data
        //console.log(data);
        print(me.url).then(({data}) => {
          var exe = eval(data.substring(21))
          exe.print('useDefaultPrinter=0&printerName='+me.printer_product+'&printRotation=None&fileName='+name);
        }).catch((error) => { console.log(error) })
      }).catch((error) => console.log(error))
    },
    update(){

    },
    destroy(){

    }
  }
}
</script>

<style lang="css">
</style>
