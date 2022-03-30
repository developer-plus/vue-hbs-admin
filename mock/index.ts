import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.globEager('./service/**/*.ts')

const mockModules: any[] = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})

export function setupMockServer() {
  createProdMockServer(mockModules)
}
