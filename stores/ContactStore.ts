import countries from './countries'

import fetch from 'cross-fetch'

import {
  action,
  computed,
  observable,
  makeObservable,
  runInAction,
} from 'mobx'

const TEST_URL = 'http://localhost:5001/contacts'
const LIVE_URL = 'https://ppe-inc.wl.r.appspot.com/contacts'

class ContactStore {
  @observable
  email = ''

  @observable
  name = ''

  @observable
  firstName = ''

  @observable
  lastName = ''

  @observable
  company = ''

  @observable
  phoneNumber = ''

  @observable
  website = ''

  @observable
  expectedVolume = ''

  @observable
  city = ''

  @observable
  state = ''

  @observable
  country = ''

  @observable
  commentsAndQuestions = ''

  @observable
  isLoading = false

  constructor() {
    makeObservable(this)
  }

  @computed
  get stateOptions() {
    let options = {}
    let cs = countries

    for (let k in cs) {
      let country = cs[k]
      let cCode = country.code.toUpperCase()

      let c = options[cCode]
      if (!c) {
        c = options[cCode] = {}
      }

      let subdivisions = country.subdivisions.slice().sort((a, b) => {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })

      for (let k2 in subdivisions) {
        let subdivision = subdivisions[k2]

        c[subdivision.code.toUpperCase()] = subdivision.name
      }
    }

    return options
  }

  @computed
  get countryOptions() {
    let cs = countries.slice().sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })

    let options = {}

    for (let k in cs) {
      let country = countries[k]
      options[country.code.toUpperCase()] = country.name
    }

    return options
  }

  @action
  setValue(k, v) {
    console.log('k, v', k, v)
    this[k] = v
    console.log('test', this[k], '123')
  }

  @action
  async submit() {
    this.isLoading = true

    console.log('z', this)

    const data = {
      emailAddress: this.email,
      fullName: this.name,
      firstName: this.firstName,
      lastName: this.lastName,
      company: this.company,
      businessPhone: this.phoneNumber,
      website: this.website,
      businessAddress: {
        city: this.city,
        state: this.state,
        country: this.country,
      },
      customFields: {
        user1: this.expectedVolume,
        user2: this.commentsAndQuestions,
      },
    }

    const URL = window.location.hostname.indexOf('localhost') >= 0 ? TEST_URL : LIVE_URL

    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })

      const ret = await res.json()

      runInAction(() => {
        console.log('suc')
        this.isLoading = false
      })

      return ret
    } catch (e) {
      console.log('fetch submit failed', e)

      runInAction(() => {
        console.log('err')
        this.isLoading = false
      })

      throw e
    }
  }
}

export default ContactStore
