<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

const { name, age } = userStore.getUserValues()
</script>

<template>
  <section class="personal-data">
    <div class="container">
      <h2 class="personal-data__title h2">Персональные данные</h2>
      <p class="personal-data__info">{{ name }}, {{ age }} лет</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.personal-data {
  &__info {
    margin-top: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    color: $black;
  }
}
</style>
