<template lang="html">
  <el-select v-model="value" placeholder="Seleccione un rol" :clearable="true" style="width: 100%">
    <el-option
      v-for="item in roles"
      :key="item.rol.id"
      :label="item.rol.name"
      :value="item.rol.id">
    </el-option>
  </el-select>
</template>

<script>
import { allRoles } from '@/api/users'
export default {
  name: 'roles',
  data(){
    return {
      roles: [],
      value: ''
    }
  },
  props: ['selected'],
  watch :{
    value(newValue, oldValue){
      this.$store.dispatch('changeRolSelected', newValue)
    },
    selected(newValue, oldValue){
      this.value = newValue
    }
  },
  created(){
    // this.getRoles()
  },
  methods:{
    getRoles: function(){
      allRoles().then(response => {
        var myObj = JSON.parse(response.data.data);
        this.roles = myObj
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
