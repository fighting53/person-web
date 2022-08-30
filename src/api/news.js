import { get } from '@/utils/axios'
import config from '@/config'

//获取所有新闻类型类型
export function newsTypes(data) {
    return get('/news/types', data).then((res) => {
        return res
    })
}

//根据新闻类型获取新闻列表
export function newsList(data) {
    return get('/news/list', data).then((res) => {
        return res
    })
}

//根据新闻id获取新闻详情
export function newsDetails(data) {
    return get('/news/details', data).then((res) => {
        return res
    })
}

// 获取历史上的今天
export function historyToday(data) {
    return get('/history/today', data).then((res) => {
        return res
    })
}
// 获取每日一句
export function recommend(data) {
    return get('/daily_word/recommend', data).then((res) => {
        return res
    })
}

// 获取天气
export function freeWeek(data) {
    return get('/free/week', data, { baseURL: config.baseFree }).then((res) => {
        return res
    })
}
