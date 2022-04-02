import * as XLSX from 'xlsx'
import type { WorkBook } from 'xlsx'
import type { JsonToSheet, AoAToSheet } from './types'

const { utils, writeFile } = XLSX

const DEFAULT_FILE_NAME = 'excel-list.xlsx'

export function jsonToSheetXlsx<T = any>(options: JsonToSheet<T>) {
  const {
    data,
    header,
    filename = DEFAULT_FILE_NAME,
    json2sheetOpts = {},
    write2excelOpts = { bookType: 'xlsx' }
  } = options

  const arrData = [...data]
  if (header) {
    arrData.unshift(header)
    json2sheetOpts.skipHeader = true
  }

  const worksheet = utils.json_to_sheet(arrData, json2sheetOpts)

  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  }
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts)
  /* at this point, out.xlsb will have been downloaded */
}

export function aoaToSheetXlsx<T = any>(options: AoAToSheet<T>) {
  const {
    data,
    header,
    filename = DEFAULT_FILE_NAME,
    write2excelOpts = { bookType: 'xlsx' }
  } = options

  const arrData = [...data]
  if (header) {
    arrData.unshift(header)
  }

  const worksheet = utils.aoa_to_sheet(arrData)

  /* add worksheet to workbook */
  const workbook: WorkBook = {
    SheetNames: [filename],
    Sheets: {
      [filename]: worksheet
    }
  }
  /* output format determined by filename */
  writeFile(workbook, filename, write2excelOpts)
  /* at this point, out.xlsb will have been downloaded */
}
