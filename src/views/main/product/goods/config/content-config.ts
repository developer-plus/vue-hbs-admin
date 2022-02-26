export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价格', minWidth: '80' },
    { prop: 'newPrice', label: '现价格', minWidth: '80' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100' },
    { prop: 'status', label: '状态', minWidth: '100' },
    { prop: 'createAt', label: '创建时间', minWidth: '250' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250' },
    { label: '操作', minWidth: '120' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
