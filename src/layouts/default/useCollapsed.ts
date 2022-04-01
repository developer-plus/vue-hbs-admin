export function useCollapsed() {
  const collapsed = ref<boolean>(false)

  const getCollapsed = computed(() => collapsed.value)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return {
    getCollapsed,
    toggleCollapsed
  }
}
