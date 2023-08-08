<script setup lang="ts">
import BaseChildLabel from '@/components/childlable/BaseChildLabel.vue'
import { useChildrenStore } from '@/stores/childrenStore'

const { children } = useChildrenStore()
</script>

<template>
  <section class="children">
    <div class="container">
      <h2 class="children__title h2">Дети</h2>
      <div class="children__items">
        <BaseChildLabel
          class="children__item"
          v-for="child in children"
          :key="child.id"
          :child="child"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.children {
  &__info {
    margin-top: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    color: $black;
  }

  &__items {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
