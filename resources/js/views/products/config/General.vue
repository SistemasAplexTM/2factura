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
    <el-form ref="form" :model="form" label-width="120px" label-position="left">
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
    </el-form>
  </el-card>
</template>

<script>
import Sticky from '@/components/Sticky'
import { getAdminProduct } from '@/api/admin_product'
import { saveConfig, getConfig } from '@/api/config'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: { Sticky, vueDropzone: vue2Dropzone },
  data() {
    return {
      options: [],
      values: [],
      form: {},
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          addRemoveLinks: true,
          headers: { "My-Awesome-Header": "header value" }
      }
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
      saveConfig('product', this.values).then(({data}) => {
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
