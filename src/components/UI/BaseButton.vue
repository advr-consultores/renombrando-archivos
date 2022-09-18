<template>
    <button :class="[mode, 'herencia']">
        <slot></slot>
    </button>
</template>

<script>
export default { props: ['mode'] }
</script>

<style scoped>
.button{
  cursor: pointer;
}
.group{
  width: 100%;
  padding: 1rem 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-right: 0.1rem solid var(--negro);
  background: #FFF;
}
.group:last-child{ border-right: none; }
.group:hover{
  background-color: var(--primarioOscuro);
  color: var(--blanco);
}
.selected{
  background-color: var(--primarioOscuro) !important;
  color: var(--blanco) !important;
}
.herencia{
  pointer-events: inherit;
  color: inherit;
  background-color: inherit;
  border-color: inherit;
}
</style>