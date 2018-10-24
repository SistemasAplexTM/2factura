<template>
  <div id="app">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <sticky :className="'sub-navbar draft'" title="Formato de impresión">
          <el-button size="small" type="primary" @click="save">
            Guardar
          </el-button>
          <el-button id="cancelButton" type="default" size="small" >Cancelar</el-button>
        </sticky>
      </div>
      <br>
      <vueditor ref="editor" style="min-height: 500px"></vueditor>


<div style="text-align: center;"><span style="color: inherit;">Bienvenido</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">{nom_consignee}</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">Usted se ha registrado a nuestro servicio de casillero, a partir de ahora cuenta con una dirección física en {pais_agencia}, sus compras o encomiendas que deba realizar, debe dirigirlos a la siguiente dirección:</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><strong><div style="text-align: center;"><strong style="color: inherit;">Dirección:</strong><span style="color: inherit;"> {dir_agencia}.</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Ciudad:</strong><span style="color: inherit;"> {ciudad_agencia}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Estado:</strong><span style="color: inherit;"> {estado_agencia}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Código Postal:</strong><span style="color: inherit;"> {zip_agencia}</span></div></strong><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">El código de casillero asignado a usted es: {pobox_consignee}</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">-----------------------------------------------</span></div><div style="text-align: center;"><span style="color: inherit;">Sus datos de acceso al sistema son:</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><strong><div style="text-align: center;"><strong style="color: inherit;">Link:</strong><span style="color: inherit;"> {url_principal}/</span><span style="color: inherit;">{id_agencia}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Usuario:</strong><span style="color: inherit;"> {email_consignee}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Contraseña:</strong><span style="color: inherit;"> {pass_consignee}</span></div></strong><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">-----------------------------------------------</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">Los envíos a {pais_consignee}, se realizarán a la siguiente dirección:</span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><strong><div style="text-align: center;"><strong style="color: inherit;">Dirección:</strong><span style="color: inherit;"> {dir_consignee}.</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Ciudad:</strong><span style="color: inherit;"> {ciu_consignee}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Departamento / Estado:</strong><span style="color: inherit;"> {depto_consignee}</span></div></strong><strong><div style="text-align: center;"><strong style="color: inherit;">Código Postal:</strong><span style="color: inherit;"> {zip_consignee}</span></div></strong><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="font-size: 15px;"><br></span></div><div style="text-align: center;"><span style="color: inherit;">Los alertas del sistema se enviarán al email: {email_consignee} El teléfono de contacto con el cual nos comunicaremos en caso de ser requerido será: Movil: {cel_consignee} o Fijo: {tel_consignee}.</span></div><div style="text-align: center;"><br></div>





    </el-card>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { saveConfig, getConfig } from '@/api/config'

export default {
  components: { Sticky },
  data () {
    return {
      myHTML: ''
    }
  },
  created(){
    getConfig('test_format_print').then(({data}) => {
      this.myHTML = data.value
      this.$refs.editor.setContent(this.myHTML)
    }).catch((error) => { console.log(error) })
  },
  methods:{
    save(){
      this.myHTML = this.$refs.editor.getContent()
      saveConfig('test_format_print', 'format_print',true, this.myHTML).then(({data}) => {
        this.$message({
           message: 'Registrado con éxito.',
           type: 'success'
         });
      }).catch(error => {
        this.$message.error('Error al registrar.');
      })
    }
  }
}
</script>
<style>
</style>
