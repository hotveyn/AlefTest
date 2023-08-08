<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <h2 class="footer__rights">all rights reserved</h2>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 30px 0;
  background-color: $grey-m;
  display: flex;
  justify-content: center;

  &__rights {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
