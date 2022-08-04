<template>
  <div>
    <input 
      type="radio" 
      name="tipo" 
      v-model="tipo" 
      value="licencia"
    >Licencia<br>
    <input 
      type="radio" 
      name="tipo" 
      v-model="tipo" 
      value="factura"
    >Factura<br>
  </div>
</template>

<script>
export default {
  data() { return { tipo: null } },
  watch: { tipo(){ this.$emit('seleccion-tipoBBVA', this.tipo); } },
}
</script>
