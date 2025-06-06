<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      :multiple="multiple"
      :disabled="disabled"
      :name="name"
      v-model="internalValue"
      :required="required"
      class="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
    >
      <option
        v-for="option in options"
        :key="option.name"
        :value="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>

interface Option {
  value: string;
  name: string;
}

const props = withDefaults(defineProps<{
  modelValue: string[];
  multiple?: boolean;
  name: string;
  required: boolean;
  label: string;
  options: Option[];
  disabled?: boolean;
}>(), {
  multiple: false,
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const internalValue = computed({
  get: () => props.modelValue,
  set: (val: string[]) => emit('update:modelValue', val),
});
</script>