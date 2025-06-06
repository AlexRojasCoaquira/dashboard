<template>
  <div>
    <p class="text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </p>
    <div class="flex items-center space-x-4 mt-2">
      <div
        v-for="option in options"
        :key="option.value"
        class="flex items-center"
      >
        <input
          type="radio"
          :id="option.value"
          :name="name"
          :value="option.value"
          :checked="modelValue === option.value"
          :required="required"
          @change="$emit('update:modelValue', option.value)"
          class="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <label :for="option.value" class="ml-2 text-sm text-gray-700">
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Option {
  value: string;
  label: string;
}

const props = withDefaults(defineProps<{
  modelValue: string;
  label: string;
  required?: boolean;
  name?: string;
  options: Option[];
}>(), {
  required: false,
  name: 'radio-group',
});

defineEmits(['update:modelValue']);
</script>
