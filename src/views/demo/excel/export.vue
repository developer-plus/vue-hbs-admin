<template>
  <page-wrapper title="导出 Excel">
    <a-space>
      <a-button @click="handleClickJsonExport">
        Json 数据导出
      </a-button>
      <a-button @click="handleClickJsonExportCustom">
        Json 数据导出（自定义头部）
      </a-button>
      <a-button @click="handleClickArrayExport">
        Array 数据导出
      </a-button>
    </a-space>

    <a-table
      class="mt-16px"
      :columns="columns"
      :data-source="data"
    />
  </page-wrapper>
</template>

<script setup lang="ts">
import { columns, data, arrData, arrHeader } from './data'
import { jsonToSheetXlsx, aoaToSheetXlsx } from '~/components/Excel'
import { PageWrapper } from '~/components/Page'

const handleClickJsonExport = () => {
  jsonToSheetXlsx({
    data,
    filename: 'Json数据导出.xlsx'
  })
}

const handleClickJsonExportCustom = () => {
  jsonToSheetXlsx({
    data,
    header: {
      id: 'ID',
      name: '姓名',
      age: '年龄',
      no: '编号',
      address: '地址',
      beginTime: '开始时间',
      endTime: '结束时间'
    },
    filename: 'Json数据导出.xlsx'
  })
}

const handleClickArrayExport = () => {
  aoaToSheetXlsx({
    data: arrData,
    header: arrHeader,
    filename: 'Array数据导出.xlsx'
  })
}
</script>
