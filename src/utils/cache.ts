class LocalCache {
  setCache(key: string, value: any) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
    else {
      window.localStorage.removeItem(key)
    }
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
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
