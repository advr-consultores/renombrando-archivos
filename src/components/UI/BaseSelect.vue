<template>
  <div class="contenedor">
    <label for="tipo">{{ titulo }}:</label>
    <select 
      class="herencia"
      id="selectTipo" 
      name="tipo" 
      v-model="valor" 
      @change="returnValue()"
    >
      <option selected disabled>Seleccione {{ titulo }}</option>
      <option 
        v-for="opcion in opciones" 
        :key="opcion.value" 
        :value="opcion.value"
      > 
        {{ opcion.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ['returnValue'],
  props: ['titulo', 'opciones'],
  data() { return { valor: '' } },
  methods: {
    returnValue() { this.$emit('returnValue', this.valor) },
    resetValue() { this.valor = '' },
  }
}
</script>

<style scoped>
option {
  font-weight: 700;
}

select {
  border: 0.1rem solid #000;
  padding: 0 0.5rem;
  cursor: pointer;
  height: 3rem;
}

.herencia{
  pointer-events: inherit;
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
</style>