<script setup lang="ts">
import ScreenForm from '@/screens/ScreenForm/ScreenForm.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Alef | Form'
})
</script>

<template>
  <ScreenForm />
</template>
