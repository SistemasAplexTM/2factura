<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="24">
        <h1>Acá vamos a imprimir</h1>
      </el-col>
    </el-row>
    <el-row :gutter="14">
        <el-col :span="12">
          <el-button @click="exePrueba">Impresoras...</el-button>
          <br>
          <br>
          <el-select v-model="print" placeholder="Select">
            <el-option
            v-for="item in prints"
            :key="item.name"
            :label="item.name"
            :value="item.name">
          </el-option>
        </el-select>
        </el-col>
        <el-col :span="12">
          <el-button @click="exePrint">Imprimir</el-button>
          <br>
          <br>
          <iframe src="//docs.google.com/gview?url=http://webclientprintphp.azurewebsites.net/files/LoremIpsum.pdf&embedded=true" style="width: 100%; height: 500px;" frameborder="0"></iframe>
        </el-col>
    </el-row>
  </div>
</template>

<script>
var clientPrinters = null;

var wcppGetPrintersTimeout_ms = 10000; //10 sec
var wcppGetPrintersTimeoutStep_ms = 500; //0.5 sec
function wcpGetPrintersOnSuccess() {
    // Display client installed printers
    if (arguments[0].length > 0) {
      clientPrinters = JSON.parse(arguments[0]);
    } else {
        alert("No printers are installed in your system.");
    }
}

import { getUrlImpressInfo, getJsWebClientPrint } from '@/api/global'
export default {
  data(){
    return {
      dataPrueba: '',
      print: '',
      prints: clientPrinters
    }
  },
  created(){
    getUrlImpressInfo().then(({data}) => {
      getJsWebClientPrint(data)
      .then(({data}) => {
        this.dataPrueba = data.substring(21)
      }).catch((error) => { console.log(error) })
    }).catch((error) => { console.log(error) })
  },
  methods: {
    exePrueba(){
      var tales = eval(this.dataPrueba)
      tales.getPrinters()
    },
    exePrint(){
      var tales = eval(this.dataPrueba)
      tales.print('useDefaultPrinter=1&printerName=null&filetype=TXT')
    },
  }
}
</script>

<style lang="css">
</style>
