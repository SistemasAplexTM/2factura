<template>
  <!-- <router-view :key="key"></router-view> -->
  <!-- <section>
      <el-card class="box-card no-padding" shadow="never" :body-style="{ padding: '0px' }">
        <div slot="header" class="header">
          <h4>AplexTM</h4>
        </div>
      </el-card>
  </section> -->
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data(){
    return {
      loading: true
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 84px);
  position: relative;
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 15px;
}
</style>
