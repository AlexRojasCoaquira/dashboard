<template>
  <form @submit.prevent="sendData()" class="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-lg shadow-md">
    <!-- Input de Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <CommonInput />
    </div>

    <!-- Select Multiple -->
    <div>
      <label for="options" class="block text-sm font-medium text-gray-700">Selecciona tus opciones</label>
      <select
        id="options"
        name="options"
        multiple
        class="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
        <option value="opcion4">Opción 4</option>
      </select>
    </div>

    <!-- Radio Buttons -->
    <div>
      <p class="text-sm font-medium text-gray-700">Frecuencia de alerta</p>
      <div class="flex items-center space-x-4 mt-2">
        <div class="flex items-center">
          <input
            type="radio"
            id="option1"
            name="radioOption"
            value="opcion1"
            class="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label for="option1" class="ml-2 text-sm text-gray-700">Diaria</label>
        </div>
        <div class="flex items-center">
          <input
            type="radio"
            id="option2"
            name="radioOption"
            value="opcion2"
            class="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
          <label for="option2" class="ml-2 text-sm text-gray-700">Semanal</label>
        </div>
      </div>
    </div>

    <!-- Botón de envío -->
    <div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Enviar
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
const sendData = () => {
  alert('FORMULARIO ENVIADO CON ÉXITO')
}
</script>

<style>

</style>