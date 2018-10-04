<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ selected_type_text }}</span>
          </div>
          <attributes-form :type="selected" :description="selected_type_text" @reset="resetTable('attributes')"></attributes-form>
          <attributes-list ref="attributesList" :type="selected" @termsSelected="termsSelected" @reset="resetTable(null)"></attributes-list>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ selected_text }} - Términos</span>
          </div>
          <attributes-form code="true" :type="selected" :description="selected_text" :type_id="selected_id" @reset="resetTable('term')"></attributes-form>
          <terms-list ref="termsList" :id="selected_id"></terms-list>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AttributesForm from './Form'
import AttributesList from './attributes/List'
import TermsList from './terms/List'
import { mapGetters } from 'vuex'
export default {
  components: { AttributesList, AttributesForm, TermsList },
  computed:   { ...mapGetters(['selected_type_text', 'selected_text', 'selected', 'selected_id']) },
  methods: {
    termsSelected(val){
      var data = {selected_id: val.dtRowId, selected_text: val.description}
      this.$store.commit('SET_SELECTED_ID', data)
    },
    resetTable(type){
      if (type == "attributes") {
        this.$refs.attributesList.reset()
      }else{
        this.$refs.termsList.reset()
      }
    }
  }
}
</script>
