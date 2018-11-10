<template lang="html">
  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" ></vue-dropzone>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  components: { vueDropzone: vue2Dropzone },
  data(){
    return {
      dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 2,
          addRemoveLinks: true,
          dictDefaultMessage: 'Imagen del producto ',
          headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>

<style lang="css">

</style>
