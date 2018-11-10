<template>
  <div class="">
    <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <sticky :className="'sub-navbar draft'" title="Registre una sucursal">
                <el-button size="small" type="primary" @click="save">
                  Guardar
                </el-button>
                <el-button id="cancelButton" type="default" size="small" @click="reset()">Cancelar</el-button>
              </sticky>
            </div>
            <br>
            <el-form label-position="left" label-width="120px" :rules="rules" ref="form" :model="form">
              <el-form-item label="Razón social" prop="business_name">
                  <el-input placeholder="" v-model="form.business_name"></el-input>
              </el-form-item>
              <el-form-item label="Dirección" prop="address">
                  <el-input placeholder="" v-model="form.address"></el-input>
              </el-form-item>
              <el-form-item label="Correo" prop="email">
                  <el-input placeholder="" v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="Teléfono">
                  <el-input placeholder="" v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="Celular">
                  <el-input placeholder="" v-model="form.mobile"></el-input>
              </el-form-item>
              <el-form-item label="Representante" prop="representative">
                  <el-input placeholder="" v-model="form.representative"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :span="16">
          <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
              <sticky :className="'sub-navbar draft'" title="Sucursales registradas">
              </sticky>
            </div>
            <br>
            <vue-table class="box"
              path="api/shop/init"
              @destroy="destroy"
              id="product"
              ref="product"
              />
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import VueTable from '@/components/enso/vuedatatable/VueTable.vue'
import { add } from '@/api/shop'
export default {
  components: { Sticky, VueTable },
  data(){
    return {
      form: {
        business_name: '',
        address: '',
        email: '',
        phone: '',
        mobile: '',
        representative: ''
      },
      rules: {
        business_name: [
          { required: true, message: 'Campo obligatorio', trigger: 'blur' },
        ],
        address: [
          { required: true, message: 'Campo obligatorio', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Campo obligatorio', trigger: 'blur' },
          { type: 'email', required: true, message: 'Correo invalido', trigger: ['blur', 'change'] }
        ],
        representative: [
          { required: true, message: 'Campo obligatorio', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    save(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          add(this.form).then((response) => {
            this.reset()
            this.$message.success('Registro exitoso.');
          }).catch((error) => {
            this.$message.error('Error al registrar.');
            console.log(error);
          })
        } else {
          return false;
        }
      })
    },
    destroy(){

    },
    reset() {
      this.$refs['form'].resetFields();
    }
  }
}
</script>

<style lang="css">
</style>
