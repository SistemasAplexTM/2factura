<template>
  <el-form :inline="true" ref="form" :model="form">
    <el-form-item>
      <el-input :placeholder="placeholder" v-model="form.name" @keyup.enter="submit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-if="code" placeholder="código" v-model="form.code" @keyup.enter="submit"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button icon="el-icon-check" size="small" type="success" @click="submit"></el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addAdminProduct } from '@/api/admin_product'
  export default {
    props: ["type", "description", "type_id", "code"],
    data() {
      return {
        form: {
          name: '',
          code: '',
        }
      }
    },
    computed: {
      placeholder: function(){
        return 'Nuevo(a) ' + this.description
      }
    },
    methods: {
      submit() {
        var data = {
          name: this.form.name,
          code: this.form.code,
          type_id: this.type_id,
        }
        addAdminProduct(this.type, data).then((response) => {
          this.$emit('reset')
          this.form.name = ''
          this.form.code = ''
        }).catch((error) => {
          alert('erro = ' + error)
        })
      }
    }
  }
</script>
