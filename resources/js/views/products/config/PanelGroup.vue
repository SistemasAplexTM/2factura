<template lang="html">
  <el-row class="panel-group" :gutter="40">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="selectOption('null', 'null', 'general')">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <icon-aplex name="cog" scale="4" :type="'lnr'" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">General</div>
          12564
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="selectOption('atrb', 'Atributos', 'admin-product')">
        <div class="card-panel-icon-wrapper icon-message">
          <icon-aplex name="text-size" scale="4" :type="'lnr'" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Atributos</div>
          12564
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel' @click="selectOption('txa', 'Taxonomías', 'admin-product')">
        <div class="card-panel-icon-wrapper icon-people">
          <icon-aplex name="layers" scale="4" :type="'lnr'" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Taxonomías</div>
          12564
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="selectOption('purchases')">
        <div class="card-panel-icon-wrapper icon-money">
          <icon-aplex name="select" scale="4" :type="'lnr'" class-name="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Tipos de producto</div>
          12564
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    selectOption(type, desc, component) {
      var data = {selected: type, selected_type_text: desc}
      var dataTerm = {selected_id: null, selected_text: ''}
      this.$store.commit('SET_OPTIONS', data)
      this.$store.commit('SET_SELECTED_ID', dataTerm)
      this.$emit('select', component)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shoppingCard {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 14px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
