import axios from 'axios';
import {
  queryString
} from '@/lib/util.js';
import {
  baseURL
} from '@/lib/env.js'
import {
  Toast
} from 'vant'


// 引用axios，设置头文件
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

//请求返回拦截，把数据返回到页面之前做些什么...
axios.interceptors.response.use((response) => {

  if (response.data.code === 200) {
    return response
  } else if (response.data.code === 600) { // 登陆过其
    localStorage.clear()
    return Promise.reject(response);
  } else {
    Toast.clear()
    if (response.data && response.data.msg) {
      Toast(response.data.msg)
    }
    return Promise.reject(response);
  }

}, function (error) {
  return Promise.reject(error);
});

function apiAxios(method, url, params, token) {
  token = token ? token : (localStorage.getItem('token') ? localStorage.getItem('token') : '')

  return axios({
    method: method,
    //拼接参数
    url: method === 'GET' || method === 'DELETE' ? queryString(url, params) : url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      ACCESS_TOKEN: token
    },
    withCredentials: false
  })
}

export default {
  get: function (url, params, token) {
    return apiAxios('GET', url, params, token)
  },
  post: function (url, params, token) {
    return apiAxios('POST', url, params, token)
  },
  put: function (url, params, token) {
    return apiAxios('PUT', url, params, token)
  },
  delete: function (url, params, token) {
    return apiAxios('DELETE', url, params, token)
  },
}