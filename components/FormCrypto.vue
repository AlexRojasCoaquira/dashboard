<template>
  <form @submit.prevent="sendData()" class="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md">
    <CommonInput v-model="form.email" label="Email" type="email" required :disabled="loading" />
    <CommonSelect v-model="form.cryptos" multiple label="Selecciona tu cryptomoneda" :options="data" required :disabled="loading" />
    <CommonRadio v-model="form.frecuency" label="Frecuencia de alerta" required :options="frequencyOptions" :disabled="loading" />
    <div>
      <button
        type="submit"
        :disabled="loading"
        class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {{loading ? 'Enviando...' : 'Enviar'}}
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
  import { Global } from '../interfaces/Global'
  const defaultForm = {
    email: '',
    cryptos: [],
    frequency: false,
  }
  const frequencyOptions = [
    { value: 'daily', label: 'Diario'},
    { value: 'weekly', label: 'Semanal' },
  ]
  const loading = ref<boolean>(false)
  const props = defineProps<{
    data: [];
  }>();
  const form = reactive(defaultForm)
  const sendData = async () => {
    try {
      loading.value= true
      //await para el service futuro
      setTimeout(() => {
        loading.value = false
        alert('FORMULARIO ENVIADO CON ÉXITO')
      }, 3000);
    } catch (error) {
      console.log('error', error)
    }
  }
</script>

<style>

</style>