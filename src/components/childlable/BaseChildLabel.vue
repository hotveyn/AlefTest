<script setup lang="ts">
import type { IChild } from '@/interfaces/IChild'

defineProps<{
  child: IChild
}>()
</script>

<template>
  <p class="child-label">{{ child.name }}, {{ child.age }} лет</p>
</template>

<style scoped lang="scss">
.child-label {
  width: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: $grey-l;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  color: $black;
}
</style>
