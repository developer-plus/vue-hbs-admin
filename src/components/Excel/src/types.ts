export interface ExcelData<T = any> {
  header: string[]
  results: T[]
  meta: { sheetName: string }
}
