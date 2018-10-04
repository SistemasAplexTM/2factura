<template lang="html">
  <div class="">
    <sticky :className="'sub-navbar draft'" title="Registrar producto">
      <el-button size="small" type="primary">
        Guardar
      </el-button>
      <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
    </sticky>
    <br>
    <el-row :gutter="15">
        <el-col :span="20">

        </el-col>
        <el-col :span="4">

        </el-col>
    </el-row>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
export default {
  components: { Sticky },
  data: function () {
    return {
      
    }
  }
}
</script>

<style lang="css">
</style>
