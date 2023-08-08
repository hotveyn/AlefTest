<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import BaseNavigation from '@/components/navigation/BaseNavigation.vue'
</script>

<template>
  <header class="header">
    <div class="container-lg header__content">
      <RouterLink :to="{ name: 'form' }">
        <IconLogo class="header__logo" />
      </RouterLink>
      <BaseNavigation class="header__nav" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  padding: 22px 51px;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  &__logo {
    justify-self: start;
  }

  &__nav {
    justify-self: center;
  }
}
</style>
