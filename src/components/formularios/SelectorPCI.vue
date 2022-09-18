<template>
  <div class="contenedor">
    <label>Protección civil:</label>
    <base-group :mode="'round'">
       <base-button
        :class="['group', {selected: activeA}]" 
        @click="returnValue('Si')"
      >Si</base-button>

      <base-button 
        :class="['group', {selected: activeB}]"
        @click="returnValue('No')"
      >No</base-button>
    </base-group>
  </div>
</template>

<script>
export default {
  emit:['seleccionPCI'],
  data() { return { 
    pci: null,
    activeA: false,
    activeB: false,
  } },
  methods:{
    returnValue(value){
      this.pci = value;
      this.$emit('seleccionPCI', value);
    }
  },
  watch:{
    pci(value){
      if(value === 'Si'){ this.activeA = true; this.activeB = false }
      else if(value === 'No'){ this.activeB = true; this.activeA = false }
      else{ this.activeA = false; this.activeB = false }
    }
  }
}
</script>