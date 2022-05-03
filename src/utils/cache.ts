class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify({ value }))
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value).value
    }
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearLocal() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
