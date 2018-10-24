<template>
  <div id="app">
    <p>Hola</p>
    <wysiwyg v-model="myHTML" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      myHTML: ''
    }
  }
}
</script>
<style>
  @import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
