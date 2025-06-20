<template>
  <button :type="type" :class="[
    baseStyle,
    variantClasses,
    sizeClasses,
    { 'opacity-50 cursor-not-allowed': disabled }
  ]" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>

type Variant = 'primary' | 'secondary' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
  size?: Size
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const type = props.type ?? 'button'
const variant = props.variant ?? 'primary'
const size = props.size ?? 'md'
const disabled = props.disabled ?? false

const baseStyle = 'rounded-xl font-semibold transition-colors duration-300'

const variantClasses = computed(() => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-600 hover:bg-blue-700 text-white'
    case 'secondary':
      return 'bg-gray-200 hover:bg-gray-300 text-gray-800'
    case 'danger':
      return 'bg-red-600 hover:bg-red-700 text-white'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (size) {
    case 'sm':
      return 'text-sm px-3 py-1.5'
    case 'md':
      return 'text-base px-4 py-2'
    case 'lg':
      return 'text-lg px-6 py-3'
    default:
      return ''
  }
})

function onClick(e: MouseEvent) {
  if (!disabled) emit('click', e)
}
</script>
