<template lang="html">
  <div class="">
    <!-- <el-card shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ terms.description }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">Nueva</el-button>
      </div>
      <el-checkbox-group v-model="checkboxGroup5" size="small">
        <div v-for="term in terms.admin_product_meta"  style="display: inline-block;margin: 5px">
          <el-checkbox :label="term.value" border></el-checkbox>
        </div>
      </el-checkbox-group>
    </el-card> -->
    <el-card shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ terms.description }}</span>
        <el-button style="float: right; padding: 0px 0" type="text">Nueva</el-button>
      </div>
      <el-tree
        :data="terms.admin_product_meta"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :props="defaultProps">
      </el-tree>
    </el-card>
    <br>
  </div>
</template>

<script>
import { getAdminProductMetaByIds } from '@/api/admin_product'
export default {
  props: {
    id: {
      required: true
    }
  },
  data: function () {
    return {
      checkboxGroup5: [],
      terms: [],

      data2: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'value'
        }
    }
  },
  created(){
    this.allByIds()
  },
  methods:{
    allByIds: function(){
      getAdminProductMetaByIds({'id': this.id}).then(({data}) => {
        this.terms = data[0]
      }).catch((error) => {
        this.$message.error('Error al traer los datos.');
      })
    }
  }
}
</script>

<style lang="css">
</style>
