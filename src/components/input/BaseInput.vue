<script setup lang="ts" generic="T">
defineProps<{
  labelText?: string
  type: 'text' | 'number'
  modelValue: T
}>()

defineEmits<{
  'update:value': [value: HTMLInputElement['value']]
}>()
</script>

<template>
  <div class="input-wrapper">
    <label class="label">
      {{ labelText }}
      <input
        :type="type"
        class="input"
        :value="modelValue"
        @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>

<style scoped lang="scss">
.input-wrapper {
  width: 100%;
  height: 100%;
  border: 1px solid $grey-l;
  border-radius: 4px;
  max-height: 56px;
  padding: 8px 16px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow:
      0px 4px 56px 0px rgba(51, 51, 51, 0.16),
      0px 4px 4px 0px rgba(51, 51, 51, 0.04);
  }
}

.label {
  width: 100%;
  height: 100%;
  color: $grey;
  font-size: 13px;

  .input {
    border: 0;
    width: 100%;
    height: 24px;
    font-size: 14px;
    color: $black;

    &:active,
    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
