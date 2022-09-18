<template>
  <div>
    <base-select
      ref="selector"
      :titulo="'Proyecto'"
      :opciones="opcionesProyecto"
      @returnValue="returnValue"
    ></base-select>
  </div>
</template>

<script>
export default {
  emit:['seleccionProyecto'],
  props:{ opcionesProyecto: { type: Array, required: false, default: null }},
  methods:{ returnValue(value){ this.$emit('seleccionProyecto', value); }}
}
</script>
