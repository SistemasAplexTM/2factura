<template lang="html">
  <div class="">
    <sticky :className="'sub-navbar draft'" title="Registrar producto">
      <router-link :to="{ path: '/productos' }">
        <el-button type="default" icon="el-icon-tickets" size="small">Listar</el-button>
      </router-link>
      <el-button size="small" type="primary" @click="submit()">
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
          <el-col :span="24">
            <el-steps :active="active" style="margin-bottom: 30px" finish-status="success" simple>
              <el-step title="General" :status="statusGeneral"></el-step>
              <el-step title="Atributos" status=""></el-step>
              <el-step title="Custom" status=""></el-step>
            </el-steps>
          </el-col>
          <template v-if="active === 1">
            <general ref="general"></general>
          </template>
          <template v-if="active === 2">
            <attributes></attributes>
          </template>
          <template v-if="active === 3">
            <p>kmdlaksmdlaksml</p>
          </template>
          <br>
          <el-tooltip class="item" effect="dark" content="Anterior" placement="top">
            <el-button type="default" class="fl" @click="step(false)" icon="el-icon-arrow-left" style="margin-bottom: 15px"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Reiniciar" placement="top">
            <el-button type="default" @click="reset()" icon="el-icon-refresh" style="margin-bottom: 15px"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Siguiente" placement="top">
            <el-button type="primary" class="fr" @click="step(true)" icon="el-icon-arrow-right"></el-button>
          </el-tooltip>
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
import { addProduct } from '@/api/product'
export default {
  components: {Sticky,General, Panels, Attributes},
  data(){
    return {
      active: 1,
      statusGeneral: 'process',
      columns: 20,
      optionProduct: 15,
      formGeneral: {},
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
        this.$message.error('Error al traer los datos de configuración actual.');
      })
    },
    step(type) {
      if (type && this.active <= 3) {
        if (this.active != 3) {
          if (this.active == 1) {
            if (!this.$refs.general.validate()) {
              this.statusGeneral = 'error'
              return false
            }
            this.statusGeneral = 'success'
          }
          this.active++
        }
      }else{
        if (this.active != 1) {
          this.active--
        }
      }
    },
    reset() {
      this.statusGeneral = 'process'
      this.$refs.general.resetForm()
    },
    submit(){
      if (!this.$refs.general.validate()) {
        return false
      }
      this.formGeneral = this.$refs.general.validate()
      addProduct(this.formGeneral).then((response) => {
        this.reset()
        this.$message.success('Registro exitoso.');
      }).catch((error) => {
        this.$message.error('Error al registrar producto.');
        console.log(error);
      })
      console.log(this.formGeneral);
    }
  }
}
</script>

<style lang="css">
</style>
