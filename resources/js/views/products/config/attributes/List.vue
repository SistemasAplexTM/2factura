<template>

  <vue-table class="box"
  path="api/adminProduct/init"
  :params="params"
  @terms="terms"
  @edit="edit"
  @destroy="destroy"
  id="adminProduct"
  ref="adminProduct"
  />

</template>

<script>
  import VueTable from '@/components/enso/vuedatatable/VueTable.vue';
  import { destroy } from '@/api/admin_product'
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
      edit: function(val){
        // this.$store.dispatch('userEditing', val.dtRowId)
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
