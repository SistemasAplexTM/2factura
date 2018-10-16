<template lang="html">
  <vue-table class="box"
    path="api/adminProductMeta/init"
    :params="params"
    @destroy="destroy"
    @updateCell="update"
    id="adminProductMeta"
    ref="adminProductMeta"
    />
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue'
import { destroy } from '@/api/admin_product'
import { updateCell } from '@/api/global'
export default {
  components: { VueTable },
  props: ['id'],
  data(){
    return {

    }
  },
  computed: {
    params: function(){
      return {
              type: this.id
             }
    }
  },
  methods: {
    update: function(val){
      var data = {
        table: 'aplex_admin_product_metas',
        column: val.column.name,
        id: val.row.dtRowId,
        data: val.data
      }
      updateCell(data).then((response) => {
        this.reset()
        this.$message.success('Actualizadocon éxito.');
      }).catch((error) => {
        this.$message.error('Error al actualizar.');
      })
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
