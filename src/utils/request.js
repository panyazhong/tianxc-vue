import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

import { getToken } from '@/utils/cookie'
import store from '@/store'

const request = axios.create({
  baseUrl: 'http://loaclhost:3000/api',
  timeout: 6000,
})

request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

request.interceptors.response.use(
  async (response) => {
    const { data } = response
    if (data) {
      const { code } = data
      const msg = data.msg || data.message
      if (msg) {
        Message({
          message: msg,
          type: code !== 20000 ? 'error' : 'success',
          duration: 5 * 1000,
        })
      }
      if (code !== 20000) {
        if (code === 50010 || code === 50011 || code === 50012) {
          try {
            await MessageBox.confirm(
              'You have been logged out, you can cancel to stay on this page, or log in again',
              'Confirm logout',
              {
                confirmButtonText: 'Re-Login',
                cancelButtonText: 'Cancel',
                type: 'warning',
              }
            )
            location.reload()
          } catch (error) {}

          store.dispatch('resetToken')
        }
        return Promise.reject(data)
      }

      return data
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
