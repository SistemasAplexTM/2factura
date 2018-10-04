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
        <general>
          <el-select slot="action" v-model="columns" size="mini" class="fr">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </general>
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
import { getConfig } from '@/api/config'
export default {
  components: {Sticky,General, Panels},
  data(){
    return {
      columns: 20,
      options: [{
          value: 10,
          label: '10'
        }, {
          value: 12,
          label: '12'
        }, {
          value: 15,
          label: '15'
        }, {
          value: 18,
          label: '18'
        }, {
          value: 20,
          label: '20'
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
    }
  }
}
</script>

<style lang="css">
</style>
