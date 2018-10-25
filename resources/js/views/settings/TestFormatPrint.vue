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
                <el-collapse-item name="1">
                  <template slot="title">
                   <span style="font-size: 15px">{code}</span> - <strong>Código</strong>
                   <i class="header-icon el-icon-information"></i>
                 </template>
                  <div>Acá va una descripciópn de la variable, indicando al usuario que dato es el que está incluyendo exactamente.</div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <el-popover
                      placement="left-start"
                      title="Descripción"
                      width="200"
                      trigger="hover"
                      content="Acá va una pequeña descripción del campo y tal vez un ejemplo">
                      <span slot="reference" style="font-size: 15px">{name}</span>
                    </el-popover>
                 </template>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <template slot="title">
                   <span style="font-size: 15px">{price_sale}</span> - <strong>Precio de venta</strong>
                   <i class="header-icon el-icon-information"></i>
                 </template>
                  <div>Acá va una descripciópn de la variable, indicando al usuario que dato es el que está incluyendo exactamente.</div>
                </el-collapse-item>
                <el-collapse-item name="4">
                  <template slot="title">
                   <span style="font-size: 15px">{cost}</span> - <strong>Costo</strong>
                   <i class="header-icon el-icon-information"></i>
                 </template>
                  <div>Acá va una descripciópn de la variable, indicando al usuario que dato es el que está incluyendo exactamente.</div>
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
      activeName: '1'
    }
  },
  created(){
    getConfig('test_format_print').then(({data}) => {
      this.myHTML = data.value
      this.$refs.editor.setContent(this.myHTML)
    }).catch((error) => { console.log(error) })
  },
  methods:{
    save(){
      this.myHTML = this.$refs.editor.getContent()
      saveConfig('test_format_print', 'format_print',true, this.myHTML).then(({data}) => {
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
<style>
</style>
