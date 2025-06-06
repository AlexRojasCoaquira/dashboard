

<template>
  <SharedCard>
    <div class="flex items-center justify-between gap-2">
      <img class="w-10" v-if="props.data.image" :src="props.data.image" alt="">
      <div class="">
        <span>{{ props.data.name }}</span>
        <span class="block">({{ props.data.symbol }})</span>
      </div>
    </div>
   <div class="">
     <p class="text-sm font-bold">Valor actual:</p>
     <p class="text-sm">{{ props.data.current_price }} USD</p>
     <p class="text-sm font-bold">Variación porcentual:</p>
     <p class="text-sm"> {{ props.data.price_change_percentage_24h }}</p>
     <p class="text-sm font-bold">Capitalización de mercado:</p>
     <p class="text-sm">{{ props.data.market_cap }} USD</p>
   </div>
  </SharedCard>
</template>

<script lang="ts" setup>
// import { Coin } from '~/interfaces/Coin';
  const props = defineProps<{
    data: Object;
  }>();
</script>

<style>

</style>