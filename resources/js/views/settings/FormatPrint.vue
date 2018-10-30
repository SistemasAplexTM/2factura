<template>
  <div id="app">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <sticky :className="'sub-navbar draft'" title="Formato de impresión">
          <el-button size="small" type="primary" @click="save">
            Guardar
          </el-button>
          <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
        </sticky>
      </div>
      <br>
      <el-row :gutter="15">
          <el-col :span="18">
            <vueditor ref="editor" style="min-height: 600px"></vueditor>
          </el-col>
          <el-col :span="5" :offset="1" >
              <h1 class="text-center"><strong>Listado de variables</strong></h1>
              <br>
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item v-for="(value, index) in params" :name="index" :key="index">
                  <template slot="title">
                    <el-popover
                      placement="left-start"
                      :title="value.name"
                      width="200"
                      trigger="hover"
                      :content="value.desc">
                      <span slot="reference" style="font-size: 15px">{{value.code}}</span>
                    </el-popover>
                 </template>
                </el-collapse-item>
              </el-collapse>
          </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { saveConfig, getConfig } from '@/api/config'

export default {
  components: { Sticky },
  data () {
    return {
      myHTML: '',
      activeName: '1',
      params: [
        {code: '{code}', name: 'Código', desc: 'Código de producto'},
        {code: '{name}', name: 'Nombre', desc: 'Nombre de producto'},
        {code: '{price_sale}', name: 'Precio de venta', desc: 'Precio de venta del producto'}
      ]
    }
  },
  created(){
    getConfig('format_print_product').then(({data}) => {
      this.myHTML = data.value
      this.$refs.editor.setContent(this.myHTML)
    }).catch((error) => { this.$message.error('Error al registrar.') })
  },
  methods:{
    save(){
      this.myHTML = this.$refs.editor.getContent()
      saveConfig('format_print_product', 'format_print',true, this.myHTML).then(({data}) => {
        this.$message({
           message: 'Registrado con éxito.',
           type: 'success'
         });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
      saveConfig('params_print_product', 'params',false, this.params).then(({data}) => {
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
