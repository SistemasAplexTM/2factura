<template lang="html">
  <div class="">
    <div id="card">
      <h1 style="font-size: 30px">{{ product.code }}</h1>
      <h2>{{ product.name }}</h2>
    </div>

    <input id="printBtn" @click="print" type="button" style="font-size:18px" value="Print HTML Card..." />
    <el-button @click="aPDF()">PDF</el-button>
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
  },
  methods: {
    print(){
      let me = this
      //1. generate an image of HTML content through html2canvas utility
      html2canvas($('#card'), {
        onrendered: function(canvas) {
            // var b64Prefix = "data:image/png;base64,";
            var imgBase64DataUri = canvas.toDataURL("image/png");
            // var imgBase64Content = imgBase64DataUri.substring(b64Prefix.length, imgBase64DataUri.length);
            // Canvas2Image.convertToPNG(canvasObj, width, height)
            //2. save image base64 content to server-side Application Cache
            $.ajax({
                type: "POST",
                // url: "{{action('StoreImageFileController@createFile')}}",
                url: "api/product/createFile",
                data: { base64ImageContent : imgBase64DataUri},
                success: function (imgFileName) {
                    // alert("The image file: " + imgFileName + " was created at server side. Continue printing it...");

                    //2. Print the stored image file specifying the created file name
                    // jsWebClientPrint.print('useDefaultPrinter=' + $('#useDefaultPrinter').attr('checked') + '&printerName=PDFCreator&imageFileName=' + imgFileName);

                    print(me.url).then(({data}) => {
                      this.query = data.substring(21)
                      var exe = eval(this.query)
                      // exe.print('useDefaultPrinter=' + $('#useDefaultPrinter').attr('checked') + '&printerName='+me.printer_product+'&imageFileName='+imgFileName);
                    }).catch((error) => {
                      console.log(error);
                    })
                }
            });

        }
      })
    },
    aPDF(){
      let me = this
      var pdf = new jsPDF('p', 'pt', 'letter');
      var source = $('#card')[0];

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
