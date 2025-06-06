<template>
  <div class="card max-w-sm rounded-2xl border border-gray-200 p-4 shadow-md bg-white">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="css">
  .card {
    cursor: pointer;
    transition: transform ease .5s;
  }
  .card:hover {
    transform: scale(1.1);
  }
</style>