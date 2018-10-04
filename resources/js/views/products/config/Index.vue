<template>
  <div>
    <panel-group @select="selectOption"></panel-group>
    <component :is="component_selected"></component>
  </div>
</template>

<script>
import PanelGroup from './PanelGroup'
import AdminProduct from './AdminProduct'
import General from './General'
export default {
  data() {
    return {
      component_selected: "general"
    };
  },
  components: {General, AdminProduct, PanelGroup},
  methods: {
    selectOption(component){
      this.component_selected = component
    },
  }
}
</script>
