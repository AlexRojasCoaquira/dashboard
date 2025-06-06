<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      :id="id"
      :name="name"
      v-model="selectedOption"
      :disabled="disabled"
      class="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>

interface Option {
  value: string;
  label: string;
}

const props = defineProps<{
  label: string;
  id: string;
  name: string;
  options: Option[];
  disabled?: boolean;
}>();
const selectedOption = ref<string | null>(null);
</script>