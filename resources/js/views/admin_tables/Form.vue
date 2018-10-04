<template lang="html">
  <div class="" @keyup.enter="submitForm(nameForm)" @keyup.esc="resetForm(nameForm)">
    <sticky :className="'sub-navbar draft'">
      <el-button size="small" type="primary" @click="submitForm(nameForm)">
        {{ (!isEditing) ? 'Guardar' : 'Actualizar' }}
      </el-button>
      <el-button id="cancelButton" type="default" size="small" @click="resetForm(nameForm)">Cancelar</el-button>
    </sticky>
    <el-card class="box-card"  v-loading="loading">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" label-position="left" :status-icon="true">
        <el-form-item label="Descripción" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <!-- <el-form-item label="Valor" prop="value">
          <el-input v-model="ruleForm.value" suffix-icon="el-icon-date"></el-input>
        </el-form-item> -->
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { addAdmin, updateAdmin } from '@/api/admin_tables'
import { mapGetters } from 'vuex'
export default {
  name: 'Form',
  components: { Sticky },
  props: {
    isEditing: Boolean
  },
  data(){
    return {
      loading: false,
      editing: false,
      nameForm: 'ruleForm',
      ruleForm: {
        id: '',
        description: '',
        value: '',
      },
      rules: {
        description: [
          { required: true, message: 'La descripción obligatorio', trigger: 'blur' },
          { max: 50, message: 'La longitud máxima es 50', trigger: 'blur' }
        ],
        value: [
          { required: true, message: 'El valor es obligatorio', trigger: 'blur' },
          { max: 50, message: 'La longitud máxima es 50', trigger: 'blur' },
        ],
      }
    }
  },
  computed:{
    ...mapGetters([
      'admin_editing'
    ])
  },
  watch: {
    admin_editing: function(newValue, oldValue){
      this.loading = true
      if (newValue) {
        this.ruleForm = newValue
      }
      this.loading = false
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          if (!this.isEditing) {
            addAdmin(this.$route.params.type ,this.ruleForm).then(response => {
              this.resetForm(formName)
              this.loading = false
              this.$emit('reset')
              this.$message({
                message: 'Registro existoso',
                type: 'success'
              });
            }).catch(error => {
              console.log(error)
            })
          }else {
            updateAdmin(this.ruleForm.id, this.ruleForm).then(response => {
              this.resetForm(formName)
              this.loading = false
              this.$emit('reset')
              // this.$message({
              //   message: 'Registro editado',
              //   type: 'success'
              // });
            }).catch(error => {
              console.log(error)
            })
          }
        }
      });
    },
    resetForm(formName) {
      if (this.isEditing) {
        this.$store.dispatch('adminEditing', false)
      }
      this.$refs[formName].resetFields();
    }
  }
}
</script>
