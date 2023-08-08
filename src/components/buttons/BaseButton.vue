<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  type: 'primary' | 'flat' | 'secondary'
  disabled?: boolean
}>()

// const disabledClass = computed(() => {
//   if (!disabled) {
//     return
//   }
//   return
// })
</script>

<template>
  <button
    :class="[`base-button_${type}`, disabled ? 'base-button_disabled' : '']"
    class="base-button"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  font-size: 14px;
  cursor: pointer;
  border: 0;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &_primary {
    padding: 10px 20px;
    border-radius: 100px;
    color: $white;
    background-color: $primary;
  }
  &_flat {
    color: $primary;
    padding: 0;
    background-color: unset;
  }

  &_secondary {
    padding: 10px 20px;
    border-radius: 100px;
    outline: 2px solid $primary;
    color: $primary;
    background-color: $white;
  }

  &_disabled {
    background-color: $primary-disabled;
    cursor: not-allowed;
  }
}
</style>
