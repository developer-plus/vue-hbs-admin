<template>
  <div class="inline-block" @click="handleImport">
    <input
      v-show="false"
      ref="inputRef"
      type="file"
      accept=".xlsx, .xls"
      @change="handleInputChange"
    >
    <slot>
      <a-button>导入 Excel</a-button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx'
import type { ExcelData } from './types'

const props = defineProps({
  dateFormat: {
    type: String,
    default: 'YYYY-MM-DD'
  }
})

const emit = defineEmits(['success', 'error'])

const inputRef = ref<HTMLInputElement | null>(null)

const getHeaderRow = (sheet: XLSX.WorkSheet) => {
  if (!sheet || !sheet['!ref']) return []
  const headers: string[] = []

  const range = XLSX.utils.decode_range(sheet['!ref'])
  const R = range.s.r

  for (let C = range.s.c; C <= range.e.c; ++C) {
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
    let header = `UNKNOWN ${C}`
    if (cell && cell.t) header = XLSX.utils.format_cell(cell)
    headers.push(header)
  }
  return headers
}

const getExcelData = (workbook: XLSX.WorkBook) => {
  const excelData: ExcelData[] = []
  const { dateFormat } = props
  for (const sheetName of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheetName]
    const header: string[] = getHeaderRow(worksheet)
    const results = XLSX.utils.sheet_to_json(worksheet, {
      raw: true,
      dateNF: dateFormat
    }) as object[]

    excelData.push({
      header,
      results,
      meta: {
        sheetName
      }
    })
  }
  return excelData
}

const readerData = (rawFile: File) => {
  const reader = new FileReader()
  reader.onload = (e: any) => {
    try {
      const data = e.target && e.target.result
      const workbook = XLSX.read(data, { type: 'array', cellDates: true })
      const excelData = getExcelData(workbook)
      emit('success', excelData)
    }
    catch (error) {
      emit('error', error)
    }
  }
  reader.readAsArrayBuffer(rawFile)
}

const handleImport = () => {
  const inputRefDom = unref(inputRef)
  inputRefDom && inputRefDom.click()
}

const handleInputChange = (e: Event) => {
  const files = e && (e.target as HTMLInputElement).files
  const rawFile = files && files[0]
  if (!rawFile) return
  readerData(rawFile)
}
</script>
