<template lang="html">
  <div class="">
    <el-row :gutter="15">
      <el-col :span="24">
        <router-link :to="{ path: 'productos/nuevo'}">
          <el-button icon="el-icon-plus" type="success" size="small">Crear</el-button>
        </router-link>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="15">
        <el-col :span="24">
          <vue-table class="box"
            path="api/product/init"
            @destroy="destroy"
            @updateCell="update"
            id="product"
            ref="product"
            />
        </el-col>
    </el-row>
  </div>
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue'
export default {
  components: { VueTable },
  data: function () {
    return {

    }
  },
  methods: {
    update(){

    },
    destroy(){

    }
  }
}
</script>

<style lang="css">
</style>
