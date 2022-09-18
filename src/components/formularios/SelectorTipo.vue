<template>
    <base-group :mode="'round'">
       <base-button 
        :class="['group', {selected: activeA}]" 
        @click="returnValue('LICENCIA')"
      >Licencia</base-button>

      <base-button 
        :class="['group', {selected: activeB}]"
        @click="returnValue('FACTURA')"
      >Factura</base-button>
    </base-group>
</template>

<script>
export default {
  emit:['seleccionTipo'],
  data() { return { 
    tipo: null,
    activeA: false,
    activeB: false,
  } },
  methods:{
    returnValue(value){
      this.tipo = value;
      this.$emit('seleccionTipo', value);
    }
  },
  watch:{
    tipo(value){
      if(value === 'LICENCIA'){ this.activeA = true; this.activeB = false }
      else if(value === 'FACTURA'){ this.activeB = true; this.activeA = false }
      else{ this.activeA = false; this.activeB = false }
    }
  }
}
</script>
