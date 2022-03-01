import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackFn = () => any

export function usePageModal(newCb: CallBackFn, editCb: CallBackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    defaultInfo.value = item
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
