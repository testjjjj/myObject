/*
 * @Author: cjd
 * @Date: 2019-10-31 14:20:56
 * @LastEditTime: 2019-11-01 14:09:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \display\src\api\index.js
 */
import axios from 'axios'
import {Loading} from 'element-ui'
// 请求遮罩
let loadingInstance

/**
 * @description: axios简单封装(data对应post参数，params对应get参数)
 * @param {string} method:get或post
 * @param {string} url:地址
 * @param {any} params:参数
 * @return: 
 */
function apiAxios (method, url, params = null) {
    return new Promise((resolve, reject) =>{
        axios({
            method: method,
            url: url,
            params: method === 'GET' ? params : null,
            data: method === 'POST' ? params : null,
            timeout: 1000
        }).then(response => {
            if (response.status == 200){
                resolve(response.data)
            }
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * @description: 请求拦截
 * @param {type} 
 * @return: 
 */
axios.interceptors.request.use(config => {
    loadingInstance = Loading.service({
        lock: true,
        text: '努力拉取中 ~>_<~',
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return config
}, err => {
    loadingInstance.close()
    return Promise.reject(err)
})

axios.interceptors.response.use(response => {
    loadingInstance.close()
    return response
}, err => {
    return Promise.reject(err)
})
/**
 * @description: get请求
 * @param {type} 
 * @return: 
 */
function get (url, params) {
    return apiAxios('GET', url, params)
}
/**
 * @description: post请求
 * @param {type} 
 * @return: 
 */
function post (url, params) {
    return apiAxios('POST', url, params)
}
export default {
    get,
    post
}