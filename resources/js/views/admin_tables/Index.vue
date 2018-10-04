<template lang="html">
  <div class="">
    <el-row :gutter="20">
      <el-col :span="7">
        <aplex-form :isEditing="isEditing" @reset="reset"></aplex-form>
      </el-col>
      <el-col :span="17">
        <list ref="list"></list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from './List.vue'
import Form, * as aplexForm from './Form.vue'
import { mapGetters } from 'vuex'
export default {
  components: { List, aplexForm },
  data(){
    return {
      isEditing: false
    }
  },
  computed:{ ...mapGetters(['admin_editing']) },
  watch: {
    admin_editing(newValue, oldValue){
      this.isEditing = false
      if (newValue.description) {
        this.isEditing = true
      }
    }
  },
  methods: {
    reset(){
      this.$refs.list.reset()
    }
  }
}
</script>
