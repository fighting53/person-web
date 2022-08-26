import { get } from 'axios'
import config from '@/config'

//获取所有新闻类型类型
export function newsTypes(data) {
    return get('/news/types', data, { baseUrl: config.baseApiPrefix }).then(
        (res) => {
            return res
        }
    )
}

//根据新闻类型获取新闻列表
export function newsList(data) {
    return get('/news/list', data, { baseUrl: config.baseApiPrefix }).then(
        (res) => {
            return res
        }
    )
}

//根据新闻id获取新闻详情
export function newsDetails(data) {
    return get('/news/details', data, { baseUrl: config.baseApiPrefix }).then(
        (res) => {
            return res
        }
    )
}
