<template lang="html">
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
        :show-timeout="200"
        :default-active="$route.path"
        class="main-sidebar"
        :collapse="isCollapse"
        background-color="#3B4F64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        >
      <el-menu-item index="/inicio">
        <icon-aplex name="home" :type="'lnr'" class="icon-menu"/>
        <span slot="title">Inicio</span>
      </el-menu-item>
      <el-menu-item index="/document">
        <icon-aplex name="file-add" :type="'lnr'" class="icon-menu"/>
        <span slot="title">Documentos</span>
      </el-menu-item>
      <el-menu-item index="/productos">
        <icon-aplex name="shirt" :type="'lnr'" scale="1" class="icon-menu"/>
        <span slot="title">Productos</span>
      </el-menu-item>
      <el-menu-item index="/prueba_impresion">
        <icon-aplex name="printer" :type="'lnr'" scale="1" class="icon-menu"/>
        <span slot="title">Informes</span>
      </el-menu-item>
      <el-menu-item index="/configuracion">
        <icon-aplex name="cog" :type="'lnr'" scale="1" class="icon-menu"/>
        <span slot="title">Configuración</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        // 'permission_routers',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
