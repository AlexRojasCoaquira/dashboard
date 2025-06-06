<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded border border-gray-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  modelValue: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  label?: string;
  id?: string;
}>(), {
  type: 'text',
  id: 'input-' + Math.random().toString(36).slice(2, 8),
})

defineEmits(['update:modelValue'])
</script>
