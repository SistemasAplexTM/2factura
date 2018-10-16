<template lang="html">
    <el-form ref="form" :model="form" :rules="rules" label-width="150px" label-position="left">
      <el-col :span="8">
        <img-product></img-product>
      </el-col>
      <el-col :span="16">
        <el-col :span="12">
          <el-form-item label="Código" prop="code">
            <el-input placeholder="Código del producto" v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Referencia" prop="ref">
            <el-input placeholder="Referencia del producto" v-model="form.ref"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Descripción" prop="name">
            <el-input placeholder="Descripción del producto" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Precio de venta" prop="price_sale">
            <el-input placeholder="Precio del producto" v-model="form.price_sale">
              <template slot="prepend">$</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Costo" prop="cost">
            <el-input placeholder="Costo del producto" v-model="form.cost">
              <template slot="prepend">$</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-col>
    </el-form>
</template>

<script>
import ImgProduct from './Img'
export default {
  components: {ImgProduct},
  data(){
    return {
      answer: false,
      form: {
        code: '',
        ref: '',
        name: '',
        price_sale: '',
        cost: ''
      },
      loading: false,
      rules: {
         code: [
           { required: true, message: 'Código requerido', trigger: 'blur' },
         ],
         ref: [
           { required: true, message: 'Referencia requerido', trigger: 'change' }
         ],
         name: [
           { required: true, message: 'Nombre requerido', trigger: 'blur' }
         ],
         price_sale: [
           { required: true, message: 'Precio requerido', trigger: 'blur' }
         ],
         cost: [
           { required: true, message: 'Costo requerido', trigger: 'blur' }
         ]
       }
    }
  },
  methods: {
    validate(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.answer = this.form
        } else {
          this.answer = false
        }
      });
      return this.answer
    },
    resetForm() {
      this.$refs['form'].resetFields();
    }
  }
}
</script>
