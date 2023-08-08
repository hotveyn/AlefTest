import { reactive, computed, ref } from 'vue'
import type { IUser } from '@/interfaces/IUser'
import type { IChild } from '@/interfaces/IChild'
import { useUserStore } from '@/stores/userStore'
import { useChildrenStore } from '@/stores/childrenStore'
import { defineStore } from 'pinia'

export const useUserSettingsForm = defineStore('userSettingsForm', () => {
  // init
  const userStore = useUserStore()
  const childrenStore = useChildrenStore()
  const userValues = userStore.getUserValues()

  // state
  const user = reactive<IUser>({
    name: userValues.name,
    age: userValues.age
  })
  const children = reactive<IChild[]>(childrenStore.getChildrenValues())
  const touched = ref<boolean>(false)

  const childrenLength = computed(() => children.length)
  const possibleToAddChild = computed(() => {
    return childrenLength.value < 5
  })

  function addEmptyChildren() {
    if (!possibleToAddChild.value) {
      return
    }
    const newId = children.at(-1)?.id || 0
    children.push({
      id: newId + 1,
      name: 'Имя',
      age: 0
    })
    touched.value = true
  }

  function deleteChildren(children_id: number) {
    const index = children.findIndex((child: IChild) => child.id === children_id)
    children.splice(index, 1)
    touched.value = true
  }

  function upload() {
    userStore.setUser(user)
    childrenStore.setChildren(children)
    touched.value = false
  }

  function reset() {
    user.name = userValues.name
    user.age = userValues.age

    children.splice(0, children.length)
    children.push(...childrenStore.getChildrenValues())

    touched.value = false
  }

  return {
    touched,
    reset,
    user,
    children,
    addEmptyChildren,
    deleteChildren,
    possibleToAddChild,
    upload
  }
})
