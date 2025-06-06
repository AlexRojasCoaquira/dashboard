<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center">CRIPTO DASHBOARD</h1>
    <div class="w-full my-5 flex flex-col justify-center items-center">
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        <div class="w-full lg:w-60">
          <CommonInput v-model="search" placeholder="Por nombre o símbolo" />
        </div>
        <div class="w-full lg:w-24">
          <button
            type="button"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >Buscar</button>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- <FormCrypto /> -->
    </div>
    <div class="container mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-5 gap-5" v-if="filterCrypto.length">
        <CardCrypto :data="coin" v-for="(coin, idx) in filterCrypto" :key="idx" />
      </div>
      <div v-else>
        No hay data
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // import { useCoins } from '../composables/useCoins.ts'
  // const { data } = await useCoins()
  const search = ref<string>('')

  import coins from '../api/data.json'
  const data = ref([])
  data.value = coins;
  const filterCrypto = computed(() => {
    const searchInput = search.value.toLowerCase()
    const dataFilter = data.value.filter(item => item.name.toLowerCase().includes(searchInput) || item.symbol.toLowerCase().includes(searchInput))
    return dataFilter.slice(0, 10)
  })
</script>

<style>

</style>