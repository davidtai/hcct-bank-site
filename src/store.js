import Api from 'hanzo.js'

import { getStore } from 'shop.js/dist/index.umd'

import {
  HANZO_ENDPOINT,
  HANZO_KEY,
} from './settings'

let client
let store

export default () => {
  if (!client) {
    client = new Api({
      endpoint: HANZO_ENDPOINT,
      key: HANZO_KEY,
    })

    store = getStore(client, (typeof window !== 'undefined') ? window.analytics : undefined)
    store.commerce.cartInit()
  }

  return store
}
