<template lang="html">
  <div class="">
    <el-container>
      <el-aside>
        <el-menu
        default-active="1"
        class="config-user-menu"
        >
        <el-menu-item index="1" class="item">
          <icon name="user-circle" class="icon-space"/>
          <span>Información personal</span>
        </el-menu-item>
        <el-menu-item index="2" class="item">
          <icon name="history" class="icon-space"/>
          <span>Bitacora</span>
        </el-menu-item>
        <el-menu-item index="3" class="item">
          <icon name="users" class="icon-space"/>
          <span>Contactos</span>
        </el-menu-item>
        <el-menu-item index="4" class="item">
          <icon name="calendar" class="icon-space"/>
          <span>Calendario</span>
        </el-menu-item>
      </el-menu>
      </el-aside>
      <div class="container-account">
        <profile/>
      </div>
    </el-container>
  </div>
</template>

<script>
import Profile from './profile/Index'
  export default {
    components:{
      Profile
    },
    methods: {
      
    }
  }
</script>

<style lang="css" scoped>
.config-user-menu{
  width: 300px;
  border: none;
  min-height: 100vh;
  background-color: #f9f9f9;
}
.config-user-menu > .item{
  font-size: 20px;
  color: #4f4f4f;
}
.is-active{
  color: #005AEE !important;
}
.container-account{
  padding: 20px;
  width: 100%;
}
</style>
