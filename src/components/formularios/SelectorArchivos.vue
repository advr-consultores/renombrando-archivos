<template>
  <div>
    <p><slot></slot></p>
    <input type="file" @change="archivo" :accept="fileType" ref="myArchivo"/>
  </div>
</template>

<script>
export default {
  emit: ['seleccionArchivo'],
  props: ['texto', 'fileType'],
  methods: { archivo(){ this.$emit('seleccion-archivo', this.$refs.myArchivo); } },
};
</script>
