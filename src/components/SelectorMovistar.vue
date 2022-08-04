<template>
  <div>
    Nombre de proyecto:
    <select v-model="proyecto">
      <option disabled>Seleccione proyecto</option>
      <option v-for="seleccion in opcionesProyecto" :key="seleccion">
        {{ seleccion }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props:{ opcionesProyecto: { type: Array, required: false, default: null }, },
  data() { return { proyecto: null } },
  watch: { proyecto(){ this.$emit('seleccion-proyectoMovistar', this.proyecto); } },
}
</script>
