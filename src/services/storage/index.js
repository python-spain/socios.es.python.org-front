class AbstractStorageManager {
  _storage = null

  constructor (storage) {
    this._storage = storage
  }

  get (key) {
    try {
      return JSON.parse(this._storage.getItem(key) || '')
    } catch (error) {
      return undefined
    }
  }

  set (key, newValue) {
    this._storage.setItem(
      key,
      JSON.stringify(newValue)
    )

    return newValue
  }

  remove (key) {
    this._storage.removeItem(key)

    return true
  }

  clear () {
    this._storage.clear()

    return true
  }
}

class LocalStorageManager extends AbstractStorageManager {
  constructor () {
    super(window.localStorage)
  }
}

class SessionStorageManager extends AbstractStorageManager {
  constructor () {
    super(window.sessionStorage)
  }
}

export const localStorage = new LocalStorageManager()
export const sessionStorage = new SessionStorageManager()
