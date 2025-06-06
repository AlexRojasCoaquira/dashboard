<template>
  <div>
    <input
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded border border-gray-600 px-4 py-2"
    >
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(defineProps<{
    modelValue: string
    type?: string
    placeholder?: string
  }>(), {
    type: 'text',
  })
  defineEmits(['update:modelValue'])
</script>

<style>

</style>