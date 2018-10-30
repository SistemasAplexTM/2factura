<template lang="html">
  <div class="">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <sticky :className="'sub-navbar draft'" title="">
              <el-button size="small" type="primary" @click="save">
                Guardar
              </el-button>
              <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
            </sticky>
          </div>
          <el-form :model="formParams" status-icon  label-width="110px" class="demo-ruleForm" label-position="left">
            <el-form-item label="Formato">
              <el-select v-model="value" placeholder="Select">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Código" prop="code">
            <el-input type="text" v-model="formParams.code" autoComplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Nombre" prop="name">
            <el-input type="text" v-model="formParams.name" autoComplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Descripción" prop="desc">
            <el-input type="textarea" :autosize="{ minRows: 3}" v-model.number="formParams.desc"></el-input>
          </el-form-item>
        </el-form>
      </el-card>
      </el-col>
      <el-col :span="16">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <sticky :className="'sub-navbar draft'" title="">

            </sticky>
          </div>
          <el-table
            border
            :data="params.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
              label="Código"
              prop="code">
            </el-table-column>
            <el-table-column
              label="Nombre"
              prop="name">
            </el-table-column>
            <el-table-column
              label="Descripción"
              prop="desc">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" slot-scope="slot">
                <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
              </template>
              <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { saveConfig, getConfig } from '@/api/config'

export default {
  components: { Sticky },
  data(){
    return {
      options: [{
         value: 'Option1',
         label: 'Option1'
       }],
       value: '',
       formParams: {
         code: '',
         name: '',
         desc: ''
       },
       params: [],
       search: ''
    }
  },
  created(){
    this.getData()
  },
  methods: {
    save(){
      saveConfig('params_print_product', 'params',false, this.params).then(({data}) => {

        this.reset()
        this.getData()
        this.$message({
           message: 'Registrado con éxito.',
           type: 'success'
         });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
    },
    getData(){
      let me = this
      getConfig('params_print_product').then(({data}) => {
        var data = JSON.parse(data.value)
        me.params = data.params
      }).catch((error) => { console.log(error) })
    },
    destroy(){

    },
    update(){

    },
    handleEdit(){},
    handleDelete(){},
    reset(){
      this.formParams = {
        code: '',
        name: '',
        desc: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
