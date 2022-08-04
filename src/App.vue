<template>
  <div>
    <h1>Renombrador de archivos</h1>
    <selector-archivos></selector-archivos>
    <form>
      <selector-cliente
      :opciones-clientes="listaClientes"
      @seleccion-cliente="seleccionCliente"
      ></selector-cliente>

      <selector-movistar
      v-if="clienteMovistar"
      :opciones-proyecto="listaProyectos"
      @seleccion-proyectoMovistar="seleccionMovistar"
      ></selector-movistar>

      <selector-BBVA
      v-if="clienteBBVA"
      @seleccion-tipoBBVA="seleccionBBVA"
      ></selector-BBVA>

      <form-ubicacion></form-ubicacion>
    </form>
    <nombre-generado></nombre-generado>
  </div>
</template>

<script>
import SelectorMovistar from './components/SelectorMovistar.vue';
import SelectorCliente from './components/SelectorCliente.vue';
import SelectorBBVA from './components/SelectorBBVA.vue';
import SelectorArchivos from './components/SelectorArchivos.vue';
import NombreGenerado from './components/NombreGenerado.vue';
import FormUbicacion from './components/FormUbicacion.vue';

export default {
  name: 'App',
  components: { 
    SelectorArchivos,
    SelectorCliente,
    SelectorMovistar,
    SelectorBBVA,
    FormUbicacion,
    NombreGenerado,
  },
  data() {
    return {
      cliente: null,
      tipoBBVA: null,
      proyectoMovistar: null,

      listaClientes: ['BBVA', 'Movistar'],
      listaProyectos: ['Anuncios', 'Funcionamiento', 'Factura Anuncios', 'VOBO'],
    }
  },
  methods: {
    seleccionCliente(cliente){ this.cliente = cliente; },
    seleccionBBVA(tipo){ this.proyectoMovistar=null; this.tipoBBVA = tipo; },
    seleccionMovistar(proyecto){ this.tipoBBVA=null; this.proyectoMovistar = proyecto; }
  },
  computed:{
    clienteBBVA(){ return this.cliente === 'BBVA'},
    clienteMovistar(){ return this.cliente === 'Movistar'},
  },
}
</script>
