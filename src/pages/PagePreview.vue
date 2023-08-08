<script setup lang="ts">
import ScreenPreview from '@/screens/ScreenPreview/ScreenPreview.vue'
import { onMounted } from 'vue'
import { useHeadTitle } from '@/composables/useHeadTitle'
const { title } = useHeadTitle()
onMounted(() => {
  title.value = 'Alef | Preview'
})
</script>

<template>
  <ScreenPreview />
</template>

<style scoped></style>
