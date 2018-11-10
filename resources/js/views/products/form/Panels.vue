<template lang="html">
  <div class="">
    <el-card shadow="hover" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ terms.description }}</span>
        <el-button style="float: right; padding: 0px 0" type="text" @click="selected()">Nueva</el-button>
      </div>
      <!-- <el-tree
        :data="terms.admin_product_meta"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        empty-text="No hay datos"
        class="fl">
      </el-tree> -->
      <liquor-tree
        ref="tree"
        :data="dataTree"
        :options="treeOptions"
        @node:checked="selected"
      />
    </el-card>
    <br>
  </div>
</template>

<script>
import LiquorTree from  'liquor-tree'
import { getAdminProductMetaByIds } from '@/api/admin_product'

export default {
  components: { LiquorTree },
  props: {
    id: {
      required: true
    }
  },
  data: function () {
    return {
      checkboxGroup5: [],
      terms: [],
      dataTree: null,
      treeData: getTreeData(),
       treeOptions: {
         propertyNames: {
           text: 'MY_TEXT',
           children: 'KIDS',
           state: 'OPTIONS'
         },
         dnd: false,
         checkbox: true,
         checkOnSelect: true
       }
    }
  },
  created(){
    this.allByIds()
  },
  methods:{
    selected(){
      // console.log(Node.selected());
      // console.log(this.$refs.tree.checked());
      this.$store.commit('SET_TREE_SELECTED', this.$refs.tree.checked())
    },
    allByIds: function(){
      let me  = this
      getAdminProductMetaByIds({'id': this.id}).then(({data}) => {
        this.terms = data[0]
        var array1 = this.terms.admin_product_meta;
        var resultado = ''
        var obj = []
        array1.forEach(function(element, index) {
          if (element.parent === 0) {
            obj = { text: element.value, state: { expanded: true, idDB: element.id } }
          }

          // resultado = array1.filter( (element1) => element.id == element1.parent );
          resultado = array1.filter( (element1) => element1.parent != 0 );

          if (resultado) {
            if (resultado.length > 0) {
              obj.children = []
              resultado.forEach(function(result, index){
                if (result.parent != 0) {
                  if (result.parent == element.id) {
                    // obj.children.push(result.value)
                    obj.children.push({text: result.value, children: {text: result.value}})
                  }

                }
              })
            }
          }
          if (element.parent === 0) {
          me.$refs.tree.append(obj)
          }
        });
      }).catch((error) => {
        console.log(error);
        this.$message.error('Error al traer los datos.');
      })
    }
  }
}

function getTreeData() {
  return [
    {
      MY_TEXT: 'JS: The Right Way',
      OPTIONS: { expanded: true },
      KIDS: [
        { MY_TEXT: 'Getting Started (NOT DRAGGABLE)', OPTIONS: { checked: true, draggable: false } },
        { MY_TEXT: 'JavaScript Code Style', OPTIONS: { selected: true } },
        { MY_TEXT: 'MVC Pattern (NOT DROPABLE)', OPTIONS: {dropable: false} },
        { MY_TEXT: 'MVP Pattern' },
        { MY_TEXT: 'MVVM Pattern' },
        { MY_TEXT: 'The Good Parts', KIDS: [
          { MY_TEXT: 'OBJECT ORIENTED', OPTIONS: { checked: true }  },
          { MY_TEXT: 'ANONYMOUS FUNCTIONS', OPTIONS: { checked: true }  },
          { MY_TEXT: 'FUNCTIONS AS FIRST-CLASS OBJECTS', OPTIONS: { checked: true }  },
          { MY_TEXT: 'LOOSE TYPING', OPTIONS: { checked: true }  }
        ]},
        { MY_TEXT: 'Patterns', KIDS: [
          { MY_TEXT: 'DESIGN PATTERNS', OPTIONS: { expanded: true }, KIDS: [
            { MY_TEXT: 'Creational Design Patterns', KIDS: [
              { MY_TEXT: 'Factory' },
              { MY_TEXT: 'Prototype' },
              { MY_TEXT: 'Mixin' },
              { MY_TEXT: 'Singleton' }
            ]},
            { MY_TEXT: 'Structural Design Patterns'}
          ]},
          { MY_TEXT: 'MV* PATTERNS', cildren: [
            { MY_TEXT: 'MVC Pattern' },
            { MY_TEXT: 'MVP Pattern' },
            { MY_TEXT: 'MVVM Pattern' }
          ]}
        ]}
      ]
    }
  ]
}
</script>

<style lang="css">
</style>
