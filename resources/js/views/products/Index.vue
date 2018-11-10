<template lang="html">
  <div class="">
    <el-row :gutter="15">
      <el-col :span="24">
        <router-link :to="{ path: 'productos/nuevo'}">
          <el-button icon="el-icon-plus" type="success" size="small">Crear</el-button>
        </router-link>
        <div class="fr">
          <el-tooltip class="item" effect="dark" content="Ir a la configuración" placement="left">
            <router-link :to="{ path: 'configuracion_productos'}">
              <el-button icon="el-icon-setting" type="default" size="small"></el-button>
            </router-link>
          </el-tooltip>
        </div>
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
      format_print: '',
      params: []
    }
  },
  created(){
    urlPrint().then(({data}) => {
      this.url = data
    }).catch((error) => { console.log(error) })

    getConfig('product_printer').then(({data}) => {
      this.printer_product = data.value
    }).catch((error) => { console.log(error) })

    getConfig('format_print_product').then(({data}) => {
      this.format_print = data.value
    }).catch((error) => { console.log(error) })
  },
  methods: {
    print(val){
      let me = this
      getConfig('params_print_product').then(({data}) => {
        var data = JSON.parse(data.value)
        me.params = data.params
        createPDF(me.format_print, val.dtRowId, data.params).then(({data}) => {
          var name = data
          print(me.url).then(({data}) => {
            var exe = eval(data.substring(21))
            exe.print('useDefaultPrinter=0&printerName='+me.printer_product+'&printRotation=None&fileName='+name);
          }).catch((error) => { console.log(error) })
        }).catch((error) => { console.log(error) })
      }).catch((error) => { console.log(error) })
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
