<script setup lang="ts">
import BaseInput from '@/components/input/BaseInput.vue'
import { useUserSettingsForm } from '@/screens/ScreenForm/userSettingsForm'

const userSettingsForm = useUserSettingsForm()
</script>

<template>
  <div class="form-user">
    <h2 class="form-user__title h2">Персональные данные</h2>
    <div class="form-user__body">
      <BaseInput
        v-model.trim="userSettingsForm.user.name"
        @update:value="userSettingsForm.user.name = $event"
        label-text="Имя"
        type="text"
      />
      <BaseInput
        v-model.trim="userSettingsForm.user.age"
        @update:value="userSettingsForm.user.age = $event"
        label-text="Возраст"
        type="number"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-user {
  &__body {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
