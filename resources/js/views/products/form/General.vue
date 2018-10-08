<template lang="html">
  <!-- <el-card shadow="hover" class="box-card"  v-loading="loading"> -->
    <el-form ref="form" :model="form" label-width="100px" label-position="left">
      <el-col :span="8">
        <img-product></img-product>
      </el-col>
      <el-col :span="16">
        <el-col :span="12">
          <el-form-item label="Código" prop="">
            <el-input placeholder="Código del producto" v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Referencia" prop="">
            <el-input placeholder="Referencia del producto" v-model="form.ref"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="Descripción" prop="">
            <el-input placeholder="Descripción del producto" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Precio de venta" prop="">
            <el-input placeholder="Precio del producto" v-model="form.code">
              <template slot="prepend">$</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Costo" prop="">
            <el-input placeholder="Costo del producto" v-model="form.ref">
              <template slot="prepend">$</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-col>
    </el-form>

    <!-- <el-col :span="12">
      <span class="demo-input-label">Código:</span>
    </el-col>
    <el-col :span="12">
      <span class="demo-input-label">Referencia:</span>
      <el-input placeholder="Referencia del producto" v-model="form.ref"></el-input>
    </el-col>
    <el-col :span="24">
      <span class="demo-input-label">Descripción:</span>
      <el-input placeholder="Nombre del producto" v-model="form.name"></el-input>
    </el-col> -->
  <!-- </el-card> -->
</template>

<script>
import ImgProduct from './Img'
export default {
  components: {ImgProduct},
  data(){
    return {
      form: {
        code: '',
        ref: '',
        name: ''
      },
      loading: false,
      options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
      value: ''
    }
  }
}
</script>

<style lang="css">
</style>
