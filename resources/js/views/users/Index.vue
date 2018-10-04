<template lang="html">
  <div class="">
    <el-row :gutter="20">
      <el-col :span="7">
        <user-form :isEditing="isEditing" @reset="reset"></user-form>
      </el-col>
      <el-col :span="17">
        <user-list ref="list"></user-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import userList from './List.vue'
import userForm from './Form.vue'
import { mapGetters } from 'vuex'
export default {
  components: { userList, userForm },
  data(){
    return {
      isEditing: false
    }
  },
  computed:{ ...mapGetters(['user_editing']) },
  watch: {
    user_editing(newValue, oldValue){
      this.isEditing = false
      if (newValue.user) {
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
