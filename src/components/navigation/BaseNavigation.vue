<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink :to="{ name: 'form' }"> Форма </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink :to="{ name: 'preview' }"> Превью </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  &__item {
    color: $grey;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
