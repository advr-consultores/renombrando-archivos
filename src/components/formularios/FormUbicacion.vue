<template>
  <div>
    <div class="contenedor campo">
      <label for="estado" class="campo_titulo">Estado: </label>
      <select id="estado" name="estado"  class="campo_seleccion herencia" v-model="estado">
        <option selected disabled>Seleccione Estado</option>
        <option v-for="estado in opcionesEstados" :key="estado.clave" v-bind:value="estado.nombre">
          {{ estado.nombre }}
        </option>
      </select>
    </div>
    <div class="contenedor campo">
      <label for="municipio" class="campo_titulo">Municipio: </label>
      <select id="municipio" name="municipio" class="campo_seleccion" 
      :class="{'not_able': municipios.length ? false : true}" 
      v-model="municipio" :disabled="municipios.length ? false : true">
        <option selected disabled>Seleccione Municipio</option>
        <option v-for="municipio in municipios" :key="municipio">
          {{ municipio }}
        </option>
      </select>
    </div>
    <div class="contenedor campo">
      <label for="sucursal" class="campo_titulo">Sucursales: </label>
      <select id="sucursal" name="sucursal" class="campo_seleccion"
      :class="{'not_able': municipioSeleccionado === '' ? true : false}" 
      v-model="sucursal" :disabled="municipioSeleccionado ? false : true">
        <option selected disabled>Seleccione Sucursal</option>
        <option v-for="sucursal in sucursales" :key="sucursal">
          {{ sucursal }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cliente","opcionesEstados","dbSucursales"],
  emit: ["eventoEstado","eventoMunicipio","seleccionSucursal"],
  data: () => ({
    estadoSeleccionado: '',
    municipioSeleccionado: '',
    sucursalSeleccionada: '',
  }),
  computed: {
    estado: {
      set(nuevoValor) {
        this.estadoSeleccionado = nuevoValor;
        this.$emit("eventoEstado", nuevoValor);
      },
      get() {
        return this.estadoSeleccionado;
      },
    },
    municipio: {
      set(nuevoValor) {
        this.municipioSeleccionado = nuevoValor;
        this.$emit("eventoMunicipio", nuevoValor);
      },
      get() {
        return this.municipioSeleccionado;
      },
    },
    municipios(){
      const { estado, cliente } = this
      if (cliente && estado) {
        return this.municipiosInmueblesExistentes(estado, cliente.toUpperCase())
      } return []
    },
    sucursal: {
      set(nuevoValor) {
        this.sucursalSeleccionada = nuevoValor;
        this.$emit("seleccionSucursal", nuevoValor);
      },
      get() {
        return this.sucursalSeleccionada;
      },
    },
    sucursales(){
      const { cliente, estado, municipio } = this
      if (estado && cliente && municipio){
        return this.listarInmuebleseEstadoMunicipioCliente(cliente.toUpperCase(), estado, municipio.toUpperCase())
      }
      if (estado && cliente){
        return this.listarInmueblesClienteEstado(cliente.toUpperCase(), estado)
      }
      if (cliente){
        return this.listarInmueblesCliente(cliente.toUpperCase())
      }
      return []
    }
  },
  methods: {
    municipiosInmueblesExistentes(estado, cliente){
      const { dbSucursales } = this
      var municipios = []
      for ( const municipio in dbSucursales[estado]){
        for ( const sucursal in dbSucursales[estado][municipio][cliente]){
          municipios.push(municipio)
          sucursal
          break
        }
      }
      return municipios
    },
    listarInmuebles(){
      const { dbSucursales } = this
      var inmuenbles = []
      for ( const estado in dbSucursales){
        for ( const municipio in dbSucursales[estado]){
          for ( const cliente in dbSucursales[estado][municipio]){
            for ( const sucursal in dbSucursales[estado][municipio][cliente]){
              inmuenbles.push(dbSucursales[estado][municipio][cliente][sucursal])
            }
          }
        }
      }
      return inmuenbles
    },
    listarInmueblesClienteEstado(cliente, estado){
      const { dbSucursales } = this
      var inmuenbles = []
      for ( const municipio in dbSucursales[estado]){
        for ( const sucursal in dbSucursales[estado][municipio][cliente]){
          inmuenbles.push(dbSucursales[estado][municipio][cliente][sucursal])
        }
      }
      return inmuenbles
    },
    listarInmueblesCliente(cliente){
      const { dbSucursales } = this
      var inmuenbles = []
      for ( const estado in dbSucursales){
        for ( const municipio in dbSucursales[estado]){
          for ( const sucursal in dbSucursales[estado][municipio][cliente]){
            inmuenbles.push(dbSucursales[estado][municipio][cliente][sucursal])
          }
        }
      }
      return inmuenbles
    },
    listarInmuebleseEstadoMunicipio(estado, municipio){
      const { dbSucursales } = this
      var inmuenbles = []
      for ( const cliente in dbSucursales[estado][municipio]){
        for ( const sucursal in dbSucursales[estado][municipio][cliente]){
          inmuenbles.push(dbSucursales[estado][municipio][cliente][sucursal])
        }
      }
      return inmuenbles
    },
    listarInmuebleseEstadoMunicipioCliente(cliente, estado, municipio){
      const { dbSucursales } = this
      var inmuenbles = []
      for ( const sucursal in dbSucursales[estado][municipio][cliente]){
        inmuenbles.push(dbSucursales[estado][municipio][cliente][sucursal])
      }
      return inmuenbles    
    }
  }
};
</script>

<style scoped>
option { font-weight: 700; }
select {
  border: 0.1rem solid #000;
  padding: 0 0.5rem;
  cursor: pointer;
  height: 3rem;
  width: 22rem;
}
.not_able {
  pointer-events: none;
  color: #AAA;
  background-color: #F5F5F5;
  border-color: #acacac   ;
}
.campo{
  margin: 1rem 0;
}
.herencia{
  pointer-events: inherit;
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
</style>