<script setup lang="ts">
import BaseInput from '@/components/input/BaseInput.vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import { useUserSettingsForm } from '@/screens/ScreenForm/userSettingsForm'
import IconPlus from '@/components/icons/IconPlus.vue'

const userSettingsForm = useUserSettingsForm()
</script>

<template>
  <div class="form-children">
    <div class="form-children__head">
      <h2 class="form-children__title h2">Дети (макс. 5)</h2>
      <BaseButton
        class="form-children__add"
        :disabled="!userSettingsForm.possibleToAddChild"
        v-show="userSettingsForm.possibleToAddChild"
        @click.prevent="userSettingsForm.addEmptyChildren()"
        type="secondary"
      >
        <IconPlus />
        Добавить ребенка
      </BaseButton>
    </div>
    <div class="form-children__body">
      <div v-for="child in userSettingsForm.children" :key="child.id" class="form-children__child">
        <BaseInput
          v-model.trim="child.name"
          @update:value="child.name = $event"
          label-text="Имя"
          type="text"
        />
        <BaseInput
          v-model.trim="child.age"
          @update:value="child.age = $event"
          label-text="Возраст"
          type="number"
        />
        <BaseButton type="flat" @click.prevent="userSettingsForm.deleteChildren(child.id)">
          Удалить
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-children {
  &__head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  &__add {
    justify-self: end;
  }
  &__body {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  &__child {
    display: grid;
    grid-template-columns: 1fr 1fr 60px;
    align-items: center;
    gap: 18px;
  }
}
</style>
