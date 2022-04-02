<template>
  <div class="inline-block">
    <input
      v-show="false"
      ref="inputRef"
      type="file"
      accept=".xlsx, .xls"
      @change="handleInputChange"
    >
    <div @click="handleImport">
      <slot>
        <a-button>导入 Excel</a-button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx'
import type { ExcelData } from './types'

const props = defineProps({
  // 日期时间格式。如果不提供或者提供空值，将返回原始Date对象
  dateFormat: {
    type: String
  },

  // 时区调整。实验性功能，仅为了解决读取日期时间值有偏差的问题。目前仅提供了+08:00时区的偏差修正值
  // https://github.com/SheetJS/sheetjs/issues/1470#issuecomment-501108554
  timeZone: {
    type: Number,
    default: 8
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
  const { dateFormat, timeZone } = props
  for (const sheetName of workbook.SheetNames) {
    const worksheet = workbook.Sheets[sheetName]
    const header: string[] = getHeaderRow(worksheet)
    let results = XLSX.utils.sheet_to_json(worksheet, {
      raw: true,
      dateNF: dateFormat
    }) as object[]
    results = results.map((row: object) => {
      for (const field in row) {
        if (row[field] instanceof Date) {
          if (timeZone === 8) {
            row[field].setSeconds(row[field].getSeconds() + 43)
          }
          if (dateFormat) {
            row[field] = dateUtil(row[field]).format(dateFormat)
          }
        }
      }
      return row
    })
    excelData.push({
      header,
      results,
      meta: {
        sheetName
      }
    })
  }
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
  const rawFile = files && files[0] // only import files[0]
  if (!rawFile) return

  readerData(rawFile)
}
</script>
