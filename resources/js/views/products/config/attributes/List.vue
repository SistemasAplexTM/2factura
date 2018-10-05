<template>

  <vue-table class="box"
  path="api/adminProduct/init"
  :params="params"
  @terms="terms"
  @destroy="destroy"
  @updateCell="update"
  id="adminProduct"
  ref="adminProduct"
  />

</template>

<script>
  import VueTable from '@/components/enso/vuedatatable/VueTable.vue';
  import { destroy } from '@/api/admin_product'
  import { updateCell } from '@/api/global'
  export default {
    components: { VueTable },
    props: ['type'],
    data(){
      return {
      }
    },
    computed: {
      params: function(){
        return  {
                type: this.type
              }
      }
    },
    methods: {
      terms: function(val){
        this.$emit('termsSelected', val)
      },
      update: function(val){
        var data = {
          table: 'aplex_admin_products',
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
        destroy(null, val.dtRowId).then( response => {
          this.reset()
          this.loading = false
        })
      },
      reset(){
        this.$refs.adminProduct.getData()
        this.$emit('reset')
      }
    }
  }
</script>
