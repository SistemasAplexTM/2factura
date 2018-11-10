<template lang="html">
  <div class="">
    <el-row :gutter="12">
      <el-col :span="6">
        <router-link :to="{ path: 'general' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              General
              <icon-aplex name="cog" scale="1.5" :type="'lnr'" class="fr"/>
            </h1>
            <hr>
            <p>Configure los aspectos generales de la aplicación, como aspecto visual, idioma, entre otros.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'usuarios' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              <icon-aplex name="users" scale="1.5" :type="'lnr'" class="fr"/>
              Usuarios
            </h1>
            <hr>
            <p>Configure los aspectos de usuarios, roles, permisos, etc</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'roles-permisos' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              <icon-aplex name="lock" scale="1.5" :type="'lnr'" class="fr"/>
              Roles y permisos
            </h1>
            <hr>
            <p>Configure los roles y permisos de la aplicación.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="card-config">
          <h1>
            <icon-aplex name="envelope" scale="1.5" :type="'lnr'" class="fr"/>
            <!-- <icon-aplex name="envelope" scale="2" :type="'vue-awesome'" class="fr"/> -->
            <span>Correos</span>
          </h1>
          <hr>
          <p>Configure los aspectos de correo electrónico, como plantillas, listas mailchimp, entre otros.</p>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="12">
      <el-col :span="6">
        <router-link :to="{ path: 'administracion/puc' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              PUC
              <icon-aplex name="book" scale="1.5" :type="'lnr'" class="fr"/>
            </h1>
            <hr>
            <p>Configure los códigos PUC usados en la aplicación.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'administracion/fp' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              <icon-aplex name="briefcase" scale="1.5" :type="'lnr'" class="fr"/>
              Forma de pago
            </h1>
            <hr>
            <p>Configure las formas de pago permitidas en la aplicación.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'administracion/iva' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              <icon-aplex name="pie-chart" scale="1.5" :type="'lnr'" class="fr"/>
              IVA
            </h1>
            <hr>
            <p>Configure el impuesto que tendrá disponible la aplicación.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="card-config">
          <h1>
            <icon-aplex name="file-empty" scale="1.5" :type="'lnr'" class="fr"/>
            <!-- <icon-aplex name="envelope" scale="2" :type="'vue-awesome'" class="fr"/> -->
            <span>Tipo de documento</span>
          </h1>
          <hr>
          <p>Configure los tipos de documentos con los que realizará los tramites de la aplicación.</p>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <el-row :gutter="12">
      <el-col :span="6">
        <router-link :to="{ path: 'configuracion_productos' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              Productos
              <icon-aplex name="shirt" scale="1.5" :type="'lnr'" class="fr"/>
            </h1>
            <hr>
            <p>Configure los aspectos de productos como taxonomías, impuestos, etc.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'configuracion/formato_impresion' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              Formato de impresión
              <icon-aplex name="file-empty" scale="1.5" :type="'lnr'" class="fr"/>
            </h1>
            <hr>
            <p>Configure un formato de impresión de prueba para la implementación de la nueva manera de imprimir.</p>
          </el-card>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{ path: 'configuracion/sucursales' }">
          <el-card shadow="hover" class="card-config">
            <h1>
              Sucursales
              <icon-aplex name="store" scale="1.5" :type="'lnr'" class="fr"/>
            </h1>
            <hr>
            <p>Cree, edite y elimine sucursales.</p>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      toggleSideBar: false
    }
  }
}
</script>
<style scoped>
  h1{
    color: #005AEE;
    font-size: 2em;
  }
  .card-config{
    height: 200px
  }
</style>
