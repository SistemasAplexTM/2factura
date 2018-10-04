<template>
  <div class="">
    <vue-table class="box"
    path="api/admin/init"
    :params="params"
    @edit="edit"
    @destroy="destroy"
    id="admin"
    ref="admin"
    >
  </vue-table>
  </div>
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue';
import { destroy } from '@/api/admin_tables'
    export default {
      data(){
        return {
          params: {
            type: this.$route.params.type
          }
        }
      },
      components: { VueTable },
      methods: {
        edit: function(val){
          this.$store.dispatch('adminEditing', val.dtRowId)
        },
        destroy: function(val){
          this.loading = true
          destroy(val.dtRowId).then( response => {
            this.loading = false
          })
        },
        reset(){
          this.$refs.admin.getData()
        }
      }

    }
</script>
