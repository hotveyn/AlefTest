<script setup lang="ts">
import SectionPersonalData from '@/screens/ScreenPreview/sections/SectionPersonalData.vue'
import SectionChildren from '@/screens/ScreenPreview/sections/SectionChildren.vue'
</script>

<template>
  <div class="screen-preview">
    <SectionPersonalData />
    <SectionChildren />
  </div>
</template>

<style scoped lang="scss">
.screen-preview {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
}
</style>
