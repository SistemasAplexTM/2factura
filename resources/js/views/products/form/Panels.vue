<template lang="html">
  <div class="">
    <el-card shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ terms.description }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">Nueva</el-button>
      </div>
      <el-checkbox-group v-model="checkboxGroup5" size="small">
        <div v-for="term in terms.admin_product_meta"  style="display: inline-block;margin: 5px">
          <el-checkbox :label="term.value" border></el-checkbox>
        </div>
      </el-checkbox-group>
    </el-card>
    <br>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { getAdminProductMetaByIds } from '@/api/admin_product'
export default {
  components: { vueDropzone: vue2Dropzone },
  props: {
    id: {
      required: true
    }
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          addRemoveLinks: true,
          headers: { "My-Awesome-Header": "header value" }
      },
      checkboxGroup5: [],
      terms: []
    }
  },
  created(){
    this.allByIds()
  },
  methods:{
    allByIds: function(){
      getAdminProductMetaByIds({'id': this.id}).then(({data}) => {
        this.terms = data[0]
      }).catch((error) => {
        this.$message.error('Error al traer los datos.');
      })
    }
  }
}
</script>

<style lang="css">
</style>
