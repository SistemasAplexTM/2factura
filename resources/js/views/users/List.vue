<template>
  <div class="">
    <vue-table class="box"
    path="api/table/init"
    @edit="edit"
    @destroy="destroy"
    id="users"
    ref="users"
    >
  </vue-table>
  </div>
</template>

<script>
import VueTable from '@/components/enso/vuedatatable/VueTable.vue';
import { destroy } from '@/api/users'
    export default {
      components: { VueTable },
      methods: {
        edit: function(val){
          this.$store.dispatch('userEditing', val.dtRowId)
        },
        destroy: function(val){
          this.loading = true
          destroy(val.dtRowId).then( response => {
            this.loading = false
          })
        },
        reset(){
          this.$refs.users.getData()
        }
      }

    }
</script>
