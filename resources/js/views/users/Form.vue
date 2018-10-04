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
        <avatar-upload></avatar-upload>
        <el-form-item label="Nombre" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Correo" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Rol" prop="rol" class="is-required">
          <roles :selected="ruleForm.rol"></roles>
        </el-form-item>
        <el-form-item label="Nombre de usuario" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <template v-if="!isEditing">
          <el-form-item label="Contraseña" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="Confirmar contraseña" prop="password_confirm" class="is-required">
            <el-input type="password" v-model="ruleForm.password_confirm"></el-input>
          </el-form-item>
        </template>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { addUser, updateUser } from '@/api/users'
import { mapGetters } from 'vuex'
import Roles from '@/components/users/Roles.vue'
import AvatarUpload from './Img.vue'
import { passwordConfirm, unique } from '@/utils/validate'
export default {
  name: 'userForm',
  components: { Sticky, Roles, AvatarUpload },
  props: {
    isEditing: Boolean
  },
  data(){
    const validatePasswordConfirm = (rule, value, callback) => {
      if (passwordConfirm(value, this.ruleForm.password) == 200) {
        callback()
      }else{
          callback(new Error(passwordConfirm(value, this.ruleForm.password)))
      }
    }
    const validateRol = (rule, value, callback) => {
      if (this.rol_selected == '') {
        callback(new Error('El rol es requerido'))
      }else{
        callback()
      }
    }
    const uniqueUsername = (rule, value, callback) => {
      unique('users', 'username', value, this.user_editing.user_id).then(response => {
        if (response) {
          callback()
        }else{
          callback(new Error('El nombre de usuario ya está en uso'))
        }
      })
    }
    const uniqueEmail = (rule, value, callback) => {
      unique('users', 'email', value, this.user_editing.user_id).then(response => {
        console.log('response = ', response);
        if (response) {
          callback()
        }else{
          callback(new Error('El correo ya está en uso'))
        }
      })
    }
    return {
      loading: false,
      editing: false,
      nameForm: 'ruleForm',
      ruleForm: {
        id: '',
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        rol: ''
      },
      rules: {
        name: [
          { required: true, message: 'El nombre obligatorio', trigger: 'blur' },
          { max: 50, message: 'La longitud máxima es 50', trigger: 'blur' }
        ],
        username: [
          { required: true, message: 'El nombre de usuario obligatorio', trigger: 'blur' },
          { max: 20, message: 'La longitud máxima es 20', trigger: 'blur' },
          { validator: uniqueUsername, trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'El correo es obligatorio', trigger: 'blur' },
          { max: 50, message: 'La longitud máxima es 50', trigger: 'blur' },
          { type: 'email', message: 'Correo invalido', trigger: 'blur' },
          { validator: uniqueEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'La contraseña es obligatoria', trigger: 'blur' },
          { max: 50, message: 'La longitud máxima es 50', trigger: 'blur' }
        ],
        password_confirm: [
          { required: true, message: 'Debe confirmar la contraseña', trigger: 'blur' },
          { validator: validatePasswordConfirm, trigger: 'blur' }
        ],
        // rol: [
        //   { validator: validateRol, trigger: 'change' }
        // ]
      }
    }
  },
  computed:{
    ...mapGetters([
      'rol_selected',
      'user_editing'
    ])
  },
  watch: {
    user_editing: function(newValue, oldValue){
      this.loading = true
      if (newValue) {
        this.ruleForm = newValue.user
        this.ruleForm.rol = newValue.rol
      }
      this.loading = false
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.ruleForm.rol = this.rol_selected
          if (!this.isEditing) {
            addUser( this.ruleForm).then(response => {
              this.resetForm(formName)
              this.loading = false
              this.$emit('reset')
              this.$message({
                dangerouslyUseHTMLString: true,
                message: '<div>Usuario registrado</div>',
                type: 'success'
              });
            }).catch(error => {
              console.log(error)
            })
          }else {
            updateUser(this.ruleForm.id, this.ruleForm).then(response => {
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
        this.$store.dispatch('userEditing', false)
      }
      this.$store.dispatch('changeRolSelected', '')
      this.$refs[formName].resetFields();
    }
  }
}
</script>
