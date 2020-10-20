import { isFunction } from '@hanzo/utils'

const sp = (u) => (
  (x) => {
    let url = ''

    if (isFunction(u)) {
      url = u(x)
    } else {
      url = u
    }

    if (x.storeId != null) {
      return url
    }

    return url
  }
)

const byId = (name) => {
  switch (name) {
    case 'coupon':
      return sp((x) => `/coupon/${x.code || x}`)
    case 'product':
      return sp((x) => `/product/${x.id || x.slug || x}`)
    case 'user':
      return sp((x) => `/user/${x.id || x.email || x}`)
    default:
      return (x) => `/${name}/${x.id || x}`
  }
}

const statusOk = (res) => res.status === 200
const statusCreated = (res) => res.status === 201
const statusNoContent = (res) => res.status === 204

// Complete RESTful API available with secret key, so all methods are
// exposed in server environment.
const createBlueprint = (name) => {
  const endpoint = `/${name}`

  const url = byId(name)

  return {
    list: {
      url: endpoint,
      method: 'GET',
    },
    get: {
      url,
      method: 'GET',
      expects: statusOk,
    },
    create: {
      url: endpoint,
      method: 'POST',
      expects: statusCreated,
    },
    update: {
      url,
      method: 'PATCH',
      expects: statusOk,
    },
    delete: {
      url,
      method: 'DELETE',
      expects: statusNoContent,
    },
  }
}

const blueprints = {
  form: {
    subscribe: {
      url: (x) => `/form/${x.formId || x}/subscribe`,
      method: 'POST',
      expects: statusCreated,
    },
  },

  library: {
    shopjs: {
      method: 'GET',
      url: '/library/shopjs',
    },
  },
}

export default blueprints
