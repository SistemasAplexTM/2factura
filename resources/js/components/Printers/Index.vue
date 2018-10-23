<template lang="html">
  <div class="">
    <select name="lstPrinters" id="lstPrinters" @change="selectPrinter" class="form-control"></select>
  </div>
</template>

<script>
var clientPrinters = null;

var wcppGetPrintersTimeout_ms = 10000; //10 sec
var wcppGetPrintersTimeoutStep_ms = 500; //0.5 sec
function wcpGetPrintersOnSuccess() {
    // Display client installed printers
    if (arguments.length > 0) {
      clientPrinters = arguments[0];
      var options = clientPrinters.split('|');
      options.forEach(function(element){
        options += '<option>' + element + '</option>';
      })
      $('#lstPrinters').html(options);
    } else {
        alert("No printers are installed in your system.");
    }
}

import { getUrlImpressInfo, getImpressInfo } from '@/api/global'
export default {
  data(){
    return {
      query: '',
      printer: '',
      options: clientPrinters
    }
  },
  created(){
    getUrlImpressInfo().then(({data}) => {
      getImpressInfo(data).then(({data}) => {
        this.query = data.substring(21)
        var exe = eval(this.query)
        exe.getPrinters()
      }).catch((error) => {
        console.log(error);
      })
    }).catch((error) => { console.log(error) })
  },
  methods: {
    selectPrinter(){
      this.$emit('printerSelected', $("#lstPrinters").val())
    }
  }
}
</script>

<style lang="css">
</style>
