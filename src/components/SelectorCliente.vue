<template>
  <div>
    Cliente:
    <select v-model="cliente">
      <option disabled>Seleccione cliente</option>
      <option v-for="seleccion in opcionesClientes" :key="seleccion">
        {{ seleccion }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: { opcionesClientes: { type: Array, required: false, default: null }, },
  data() { return { cliente: null } },
  watch: { cliente(){ this.$emit('seleccion-cliente', this.cliente); } },
}
</script>
