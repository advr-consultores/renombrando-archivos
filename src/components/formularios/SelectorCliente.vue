<template>
  <div>
    <base-select
      ref="selTipo"
      :titulo="'Cliente'"
      :opciones="opcionesClientes"
      @returnValue="returnValue"
    ></base-select>
  </div>
</template>

<script>
export default {
  emit:['seleccionCliente'],
  props: { opcionesClientes: { type: Array, required: false, default: null }},
  methods:{ returnValue(value){ this.$emit('seleccionCliente', value); }}
}
</script>
