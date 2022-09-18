<template>
    <div>
        <label>{{titulo}}<slot></slot>:</label>
        <p>{{texto}}</p>
    </div>
</template>

<script>
export default {
  props: ['titulo','texto'],
}
</script>

<style>

</style>