<template lang="html">
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card shadow="hover">
        <h1 style="color: #005AEE">
          <icon name="history" scale="2" class="fr"/>
          Bitacora
        </h1>
        <hr>
        <p>Configure los aspectos de correo electrónico, como plantillas, listas mailchimp, entre otros.</p>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="container-profile">
          <img :src="avatar" class="img-circle img-profile">
          <icon name="camera" class="change-portada-profile"/>
        </div>
        <div class="content-profile">
          <h2 class="name-profile">
            Duvier Marin Escobar
          </h2>
          <small class="email-profile">duvierm24@gmail.com</small>
          <br>
          <br>
          <hr>
          <el-row type="flex" justify="space-around">
            <el-col :span="12">
                <h1 class="has-right-border">
                  <small style="font-size: 12px">Inicios</small>
                  <br>
                  125
                </h1>
            </el-col>
            <el-col :span="12">
                <h1>
                  <small style="font-size: 12px">Acciones</small>
                  <br>
                  512
                </h1>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {

    }
  },
   computed: {
     ...mapGetters([
       'avatar'
     ])
   }
}
</script>
<style scoped>

  .container-profile {
    /* background-color: #4286f4; */
    background-image: url('https://www.stihi.ru/pics/2011/01/31/1672.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 180px;
    margin: 0 auto;
    text-align: center;
    line-height: 340px;
  }
  .img-profile {
    vertical-align: middle;
    width: 80px;
  }
  .content-profile {
    padding: 40px;
    text-align: center;
  }
  .name-profile{
    margin-bottom: 1px;
  }.
  .email-profile{
    font-size: 12px;
  }
  .change-portada-profile{
      float: right;
      color: white;
      margin-right: 10px;
      margin-top: 10px;
      cursor: pointer;
  }
</style>
