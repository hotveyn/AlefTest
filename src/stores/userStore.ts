import { defineStore } from 'pinia'
import type { IUser } from '@/interfaces/IUser'
import { reactive, toValue } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = reactive<IUser>({
    name: 'Иван Шестопалов',
    age: 19
  })

  function getUserValues() {
    return toValue(user)
  }

  function setUser(payload: IUser) {
    user.name = payload.name
    user.age = payload.age
  }

  return { user, getUserValues, setUser }
})
