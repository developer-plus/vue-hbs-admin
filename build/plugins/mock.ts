import { viteMockServe } from 'vite-plugin-mock'

export default function setupMockServer(isBuild: boolean) {
  return viteMockServe({
    ignore: /^\_/,
    mockPath: 'mock',
    localEnabled: !isBuild,
    prodEnabled: isBuild,
    injectCode: `
      import { setupProdMockServer } from '../mock/_create-production-server'
      setupProdMockServer()
    `
  })
}
