<template lang="html">
  <el-card class="box-card" shadow="hover">
    <div slot="header" class="clearfix">
      <sticky :className="'sub-navbar draft'" title="General">
        <el-button size="small" type="primary" @click="save">
          Guardar
        </el-button>
        <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
      </sticky>
    </div>
    <p>Al momento de crear el producto, se tendrá en cuaenta está configuración para ocultar y/o mostrar algunas opciones.</p>
    <br>
    <el-row :gutter="15">
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="100px" label-position="left" :inline="true">
            <el-form-item label="Taxonomías">
              <el-select v-model="values" multiple clearable filterable  placeholder="Seleccione">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.description"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Impresora">
              <printers @printerSelected="selectedPrinter"></printers>
            </el-form-item>
          </el-form>
        </el-col>
    </el-row>
  </el-card>
</template>

<script>
import Sticky from '@/components/Sticky'
import Printers from '@/components/Printers'
import { getAdminProduct } from '@/api/admin_product'
import { saveConfig, getConfig } from '@/api/config'
export default {
  components: { Sticky, Printers },
  data() {
    return {
      options: [],
      values: [],
      printer: '',
      form: {}
    }
  },
  created(){
    this.allAdminProduct()
    this.getCurrentConfig()
  },
  methods: {
    allAdminProduct() {
      getAdminProduct('txa').then(({data}) => {
        this.options = data
      }).catch((error) => {
        this.$message.error('Error al traer los datos.');
      })
    },
    getCurrentConfig() {
      getConfig('product').then(({data}) => {
        var data = JSON.parse(data.value)
        this.values = data.taxonomies
      }).catch((error) => {
        console.log(error);
        this.$message.error('Error al traer los datos de configuración actual.');
      })
    },
    save(){
      saveConfig('product', 'taxonomies',false, this.values).then(({data}) => {
        this.$message({
           message: 'Registrado con éxito.',
           type: 'success'
         });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
    },
    selectedPrinter(val){
      saveConfig('product_printer', 'printer', true ,val).then(({data}) => {
        this.$message({
           message: 'Registrado con éxito.',
           type: 'success'
         });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
    }
  }
}
</script>
