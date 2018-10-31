<template lang="html">
  <div class="">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <sticky :className="'sub-navbar draft'" title="">
              <el-button v-if="!editing" size="small" type="primary" @click="save(true)">
                Guardar
              </el-button>
              <el-button v-else size="small" type="primary" @click="update">
                Actualizar
              </el-button>
              <el-button id="cancelButton" type="default" size="small" @click="reset">Cancelar</el-button>
            </sticky>
          </div>
          <el-form :model="formParams" :rules="rules" ref="formParams" status-icon  label-width="110px" class="demo-ruleForm" label-position="left">
            <el-form-item label="Formato" prop="format">
              <el-select v-model="formParams.format" placeholder="Select" >
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
                @click="edit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="destroy(scope.$index, scope.row)">Delete</el-button>
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
      editing: false,
      index_editing: null,
      options: [{
         value: 'Option1',
         label: 'Option1'
       }],
       params: [],
       search: '',
       formParams: {
         format: '',
         code: '',
         name: '',
         desc: ''
       },
       rules: {
         format: [
           { required: true, message: 'Formato requerido', trigger: 'change' }
         ],
         code: [
           { required: true, message: 'Código requerido', trigger: 'blur' }
          ],
          name: [
            { required: true, message: 'Nombre requerido', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: 'Descripción requerida', trigger: 'blur' }
          ],
      }
    }
  },
  created(){
    this.getData()
  },
  methods: {
    save(push){
      this.$refs['formParams'].validate((valid) => {
        if (valid) {
          if (push) {
            this.params.push(this.formParams)
          }
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
        }
      })
    },
    getData(){
      let me = this
      getConfig('params_print_product').then(({data}) => {
        var data = JSON.parse(data.value)
        me.params = data.params
      }).catch((error) => { console.log(error) })
    },
    edit(index, row){
      this.editing = true
      this.index_editing = index
      this.formParams = row
    },
    update(){
      this.params[this.index_editing] = this.formParams
      this.save(false)
    },
    destroy(index, row){
      this.params.splice(index,1)
      saveConfig('params_print_product', 'params',false, this.params).then(({data}) => {
        this.getData()
        this.$message({
          message: 'Eliminado con éxito.',
          type: 'success'
        });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
    },
    reset(){
      this.editing = false
      this.formParams = {
        code: '',
        name: '',
        desc: ''
      }
      this.$refs['formParams'].resetFields();
    }
  }
}
</script>

<style lang="css">
</style>
