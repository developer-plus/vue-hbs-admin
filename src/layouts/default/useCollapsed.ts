const collapsed = ref<boolean>(false)

export const getCollapsed = computed(() => collapsed.value)

export const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
