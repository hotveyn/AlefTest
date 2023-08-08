import { defineStore } from 'pinia'
import type { IChild } from '@/interfaces/IChild'
import { reactive } from 'vue'
import _ from 'lodash'

export const useChildrenStore = defineStore('children', () => {
  const children = reactive<IChild[]>([
    {
      id: 1,
      name: 'Иван',
      age: 13
    },
    {
      id: 2,
      name: 'Екатерина',
      age: 9
    }
  ])

  function getChildrenValues() {
    return _.cloneDeep(children)
  }

  function setChildren(payload: IChild[]) {
    children.splice(0, children.length)
    children.push(..._.cloneDeep(payload))
  }

  return { children, getChildrenValues, setChildren }
})
