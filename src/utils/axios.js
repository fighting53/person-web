import axios from 'axios'
import { Dialog, Toast } from 'vant'
import { baseApiPrefix } from '@config'

// 信息过期处理
function handleExpire() {
    //逻辑
}

const httpCode = {
    204: '查无数据',
}
console.log(baseApiPrefix, '1234566')
const ajax = axios.create({
    baseURL: baseApiPrefix,
    timeout: 30000,
})
console.log(ajax)
//  请求列表
const requestUrlList = []
// 不需要loading的请求
const doNotLoadingRequest = []

function showLoading(url) {
    // 如果是需要loading的请求，则打开loading
    if (doNotLoadingRequest.indexOf(url) === -1) {
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
            duration: 0,
        })
    }
    requestUrlList.push(url)
}
function hideLoading(url) {
    const currentRequestIndex = requestUrlList.findIndex((i) => {
        return i === url
    })
    if (currentRequestIndex !== -1) {
        requestUrlList.splice(currentRequestIndex, 1)
    }
    if (requestUrlList.length === 0) {
        Toast.clear()
    }
}
/** 请求拦截器 **/
ajax.interceptors.request.use(
    async (config) => {
        showLoading(config.url)
        return config
    },
    (error) => {
        hideLoading(error.response.config.url)
        Dialog({
            message: '请求发生错误',
        })
        return Promise.reject(error)
    }
)

/** 响应拦截器 **/
ajax.interceptors.response.use(
    (response) => {
        hideLoading(response.config.url)
        if (response.status === 200 || response.status === 204) {
            return Promise.resolve(response.data)
        } else {
            Dialog({
                message: httpCode[response.status]
                    ? httpCode[response.status]
                    : '查询失败',
            }).then(() => {
                return Promise.reject(response.data.message)
            })
        }
    },
    (error) => {
        typeof error.response === 'undefined'
            ? hideLoading(error.config.url)
            : hideLoading(error.response.config.url)
        if (error.response) {
            handleExpire()
        }
        // 进行提示
        if (error.response && Number(error.response.status) === 401) {
            handleExpire()
        }
        Dialog({
            message: error.response?.data.message
                ? error.response?.data.message
                : '网络繁忙，请稍后再试',
        })
        return Promise.reject(error)
    }
)
/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    console.log('.........', config)
    return new Promise((resolve, reject) => {
        ajax({
            method: 'get',
            url,
            params,
            ...config,
        })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        ajax({
            method: 'post',
            url,
            data,
            ...config,
        })
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
