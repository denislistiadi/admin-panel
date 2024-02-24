/* eslint-disable no-undef */
import axios from 'axios'
import deepParseJson from '../utils/deepParseJson'
import store from '../app/store'
import { initialUser, setLogged, setUser } from '../app/auth'

const unauthorizedCode = [401]

const BaseService = axios.create({
  timeout: 60000,
  baseURL: process.env.REACT_APP_BASE_URL,
})

BaseService.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem('data')
    const persistData = deepParseJson(rawPersistData)
    const accessToken = persistData.auth.token

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(setUser(initialUser))
      store.dispatch(setLogged({ logged: false, token: '' }))
    }
    return Promise.reject(error)
  },
)

const ApiService = {
  fetchData(param) {
    return new Promise((resolve, reject) => {
      BaseService(param)
        .then((response) => {
          resolve(response)
        })
        .catch((errors) => {
          reject(errors)
        })
    })
  },
}

export default ApiService
