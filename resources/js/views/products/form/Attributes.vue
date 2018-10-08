<template lang="html">
  <div class="">
    <el-form :inline="true" ref="form" :model="form">
      <el-form-item>
        <el-select v-model="attribute">
          <el-option
          v-for="item in attributes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button icon="el-icon-plus" size="small" type="success" @click="submit"></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      attribute: 15,
      attributes: [ {
          value: 15,
          label: 'Color'
        }, {
          value: 18,
          label: 'Talla'
        },{
          value: 20,
          label: 'Estampado'
        }],
        form: {}
    }
  },
  methods: {
    submit: function(){
      return true
    }
  }
}
</script>

<style lang="css">
</style>
