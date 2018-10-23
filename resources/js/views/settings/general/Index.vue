<!-- <template lang="html">
  <div class="">
    <el-row>
      <el-col :span="24">
        <h1>Impresora por defecto</h1>
        <el-select v-model="">
            <el-option
                v-for="item in "
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-button @click="exePrueba">Impresoras...</el-button>
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

import { getUrlImpressInfo } from '@/api/global'
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

      this.dataPrueba = data.substring(21)

    }).catch((error) => { console.log(error) })
  },
  methods: {
    exePrueba(){
      var tales = eval(this.dataPrueba)
      tales.getPrinters()
    }
  }
}
</script>

<style lang="css">
</style> -->
