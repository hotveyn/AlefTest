<script setup lang="ts">
import TheHeader from '@/components/header/TheHeader.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<template>
  <div class="layout-default">
    <TheHeader />
    <main class="main layout-default__main">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  height: 100dvh;
  display: grid;
  grid-template-rows: 76px auto 76px;

  &__main {
    padding: 30px 0;
  }
}
</style>
