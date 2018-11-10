<template lang="html">
  <div class="">
    <sticky :className="'sub-navbar draft'" title="General"></sticky>
    <br>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo" style="min-height: 500px">
          <el-menu-item index="1">
            <icon-aplex name="file-empty" :type="'lnr'" class="icon-menu"/>
            <span>Formato de impresión</span>
          </el-menu-item>
          <el-menu-item index="2">
            <icon-aplex name="earth" class="icon-menu" :type="'lnr'"/>
            <span>Idioma</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <params-print></params-print>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import ParamsPrint from './ParamsPrint'
export default {
  components: { Sticky, ParamsPrint},
  data(){
    return {

    }
  },
  methods: {
    save(){

    }

  }
}
</script>

<style lang="css">
</style>
