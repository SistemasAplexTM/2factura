<template lang="html">
  <vue-table class="box"
    path="api/adminProductMeta/init"
    :params="params"
    @edit="edit"
    @destroy="destroy"
    id="adminProductMeta"
    ref="adminProductMeta"
    />
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue';
import { destroy } from '@/api/admin_product'
export default {
  components: { VueTable },
  props: ['id'],
  data(){
    return {

    }
  },
  computed: {
    params: function(){
      return  {
              type: this.id
            }
    }
  },
  methods: {
    edit: function(val){
      // this.$store.dispatch('userEditing', val.dtRowId)
    },
    destroy: function(val){
      this.loading = true
      destroy('term', val.dtRowId).then( response => {
        this.reset()
        this.loading = false
      })
    },
    reset(){
      this.$refs.adminProductMeta.getData()
    }
  }
}
</script>

<style lang="css">
</style>
