<script setup lang="ts">
import ScreenPreview from '@/screens/ScreenPreview/ScreenPreview.vue'
import { onMounted } from 'vue'
onMounted(() => {
  document.title = 'Alef | Preview'
})
</script>

<template>
  <ScreenPreview />
</template>

<style scoped></style>
