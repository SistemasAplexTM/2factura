<template>
  <div class="components-container">
    <pan-thumb :image="image" width="80px" height="80px" >
      <a href="#" @click="imagecropperShow=true"><icon-aplex name="upload" :type="'lnr'"/></a>
    </pan-thumb>

    <image-cropper :width="300" :height="300" url="https://httpbin.org/post" @close='close' @crop-upload-success="cropSuccess" langType="es"
      :key="imagecropperKey" v-show="imagecropperShow"></image-cropper>
  </div>
</template>

<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'avatarUpload',
  components: { ImageCropper, PanThumb },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://cdn.icon-icons.com/icons2/20/PNG/256/businessapplication_edit_male_user_thepencil_theclient_negocio_2321.png'
    }
  },
  methods: {
    cropSuccess(resData) {
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.image = resData.files.avatar
    },
    close() {
      this.imagecropperShow = false
    }
  }
}
</script>

<style scoped>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
