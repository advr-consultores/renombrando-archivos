<template>
    <div :class="[mode, 'button_group']">
        <slot></slot>
    </div>
</template>

<script>
export default { props: ['mode'] }
</script>

<style scoped>
.button_group{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  border: 0.1rem solid var(--negro);
  overflow: hidden;
}
.round{ border-radius: 1.5rem; }
</style>