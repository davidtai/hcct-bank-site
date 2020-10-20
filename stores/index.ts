import ContactStore from './ContactStore'

let stores: any = undefined

const getStores = () => {
  if (!stores) {
    stores = {
      contactStore: new ContactStore(),
    }
    console.log('xxx')
  }

  return stores
}

export default getStores
