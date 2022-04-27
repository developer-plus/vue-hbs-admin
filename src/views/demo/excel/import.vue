<template>
  <page-wrapper title="导入 Excel">
    <import-excel @success="importSuccess" />

    <a-table
      v-for="(table, index) in tableList"
      :key="index"
      class="mt-16px"
      :data-source="table.dataSource"
      :columns="table.columns"
    />
  </page-wrapper>
</template>

<script setup lang="ts">
import { PageWrapper } from '~/components/Page'
import type { ExcelData } from '~/components/Excel'
import { ImportExcel } from '~/components/Excel'

interface Table {
  title: string
  dataSource: ExcelData[]
  columns: any[]
}

const tableList = ref<Table[]>([])

const importSuccess = (excelDataList: ExcelData[]) => {
  tableList.value = []
  for (const excelData of excelDataList) {
    const {
      header,
      results,
      meta: { sheetName }
    } = excelData
    const columns = []
    for (const title of header) {
      columns.push({ title, dataIndex: title })
    }
    tableList.value.push({ title: sheetName, dataSource: results, columns })
  }
}
</script>
