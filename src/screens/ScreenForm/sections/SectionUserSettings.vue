<script setup lang="ts">
import { useUserSettingsForm } from '@/screens/ScreenForm/userSettingsForm'
import BaseButton from '@/components/buttons/BaseButton.vue'
import FormUser from '@/screens/ScreenForm/forms/FormUser.vue'
import FormChildren from '@/screens/ScreenForm/forms/FormChildren.vue'

const userSettingsForm = useUserSettingsForm()
</script>

<template>
  <section class="user-settings">
    <div class="container">
      <form class="user-settings__forms">
        <FormUser />
        <FormChildren class="user-settings__children" />
        <div class="user-settings__buttons">
          <BaseButton
            class="user-settings__save-button"
            @click.prevent="userSettingsForm.upload()"
            type="primary"
          >
            Сохранить
          </BaseButton>
          <BaseButton
            v-show="userSettingsForm.touched"
            @click.prevent="userSettingsForm.reset()"
            type="primary"
          >
            Ресет
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.user-settings {
  &__children {
    margin-top: 50px;
  }

  &__buttons {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
