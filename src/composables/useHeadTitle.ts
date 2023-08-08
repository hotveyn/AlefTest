import { ref, watch } from 'vue'

export function useHeadTitle() {
  const title = ref('')

  title.value = document.title

  watch(title, (value, oldValue, onCleanup) => {
    document.title = value
    onCleanup(() => {
      document.title = 'Alef'
    })
  })

  return { title }
}
