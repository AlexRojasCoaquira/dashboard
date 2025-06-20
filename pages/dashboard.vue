<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold text-center text-white">CRIPTO DASHBOARD</h1>

    <!-- Filtro -->
    <div class="w-full my-5 flex flex-col justify-center items-center">
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        <div class="w-full lg:w-60 text-white">
          <CommonInput v-model="search" placeholder="Por nombre o símbolo" />
        </div>
        <CommonButton>Holaa</CommonButton>
        <div class="w-full lg:w-24" v-if="search">
          <button @click="search = ''" type="button"
            class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
            Limpiar
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div v-if="isLoading" class="text-center text-white py-10">
        Cargando criptomonedas...
      </div>

      <div v-else-if="hasError" class="text-center text-red-500 py-10">
        Ocurrió un error al cargar: {{ errorMessage }}
      </div>

      <div v-else-if="filterCrypto.length" class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <CardCrypto :data="coin" v-for="(coin, idx) in filterCrypto" :key="idx" />
      </div>

      <div v-else class="text-center text-white py-10">
        No se encontraron criptomonedas.
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useCoins } from '../composables/useCoins'
import { useServiceStatus } from '../composables/useServiceStatus'
const { data, error, status } = await useCoins()
const {
  isLoading,
  hasError,
  hasData,
  isEmpty,
  errorMessage
} = useServiceStatus(data, error, status)
const search = ref<string>('')
const filterCrypto = computed(() => {
  const searchInput = search.value.toLowerCase()
  const dataFilter = (data.value ?? []).filter(item =>
    item.name.toLowerCase().includes(searchInput) ||
    item.symbol.toLowerCase().includes(searchInput)
  )
  return dataFilter.slice(0, 10)
})
</script>
