const collapsed = ref<boolean>(false)

export function useCollapsed() {
  const getCollapsed = computed(() => collapsed.value)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return {
    getCollapsed,
    toggleCollapsed
  }
}
