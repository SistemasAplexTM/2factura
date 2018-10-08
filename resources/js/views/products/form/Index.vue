<template lang="html">
  <div class="">
    <sticky :className="'sub-navbar draft'" title="Registrar producto">
      <el-button size="small" type="primary">
        Guardar
      </el-button>
      <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
    </sticky>
    <br>
    <el-row :gutter="15">
      <el-col :span="columns">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix text-center">
            <span  class="fl">
              Tipo de producto:
              <el-select v-model="optionProduct" size="mini" style="margin-left: 10px">
                <el-option
                  v-for="item in optionsProduct"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span>Datos básicos</span>
            <el-select v-model="columns" size="mini" class="fr">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <general></general>
          <br>
          <attributes></attributes>
        </el-card>
      </el-col>
      <el-col :span="columnsPanels">
        <panels v-for="value in ids" :id="value" :key="value"></panels>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import General from './General'
import Panels from './Panels'
import Attributes from './Attributes'
import { getConfig } from '@/api/config'
export default {
  components: {Sticky,General, Panels, Attributes},
  data(){
    return {
      active: 1,
      columns: 20,
      optionProduct: 15,
      options: [ {
          value: 15,
          label: '15'
        }, {
          value: 18,
          label: '18'
        },{
          value: 20,
          label: '20'
        }],
      optionsProduct: [ {
          value: 15,
          label: 'Simple'
        }, {
          value: 18,
          label: 'Variable'
        },{
          value: 20,
          label: 'Personalizado'
        }],
      ids: []
    }
  },
  computed: {
    columnsPanels: function(){ return  24 - this.columns }
  },
  created(){
    this.configPanels()
  },
  methods:{
    configPanels: function(){
      getConfig('product').then(({data}) => {
        var data = JSON.parse(data.value)
        this.ids = data.taxonomies
      }).catch((error) => {
        console.log(error);
        this.$message.error('Error al traer los datos de configuración actual.');
      })
    },
    next() {
      if (this.active++ > 2) this.active = 1
    }
  }
}
</script>

<style lang="css">
</style>
