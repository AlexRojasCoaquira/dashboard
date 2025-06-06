<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center">FORMULARIO CRYPTO</h1>
    <div class="" v-if="data && data.length">
      <FormCrypto :data="data"/>
    </div>
    <div class="text-center mt-10" v-else>
      No se pudo cargar correctamente el formulario
    </div>
  </div>
</template>

<script lang="ts" setup>
  import coins from '../api/data.json'
  const data = ref([])
  data.value = coins;
</script>
