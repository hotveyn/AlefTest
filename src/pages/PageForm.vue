<script setup lang="ts">
import ScreenForm from '@/screens/ScreenForm/ScreenForm.vue'
import { onMounted } from 'vue'
import { useHeadTitle } from '@/composables/useHeadTitle'
const { title } = useHeadTitle()
onMounted(() => {
  title.value = 'Alef | Form'
})
</script>

<template>
  <ScreenForm />
</template>
