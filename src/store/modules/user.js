const state = {
    freesky: {
        // 天气中的
        appid: '76966357', // 账号ID
        appsecret: '5RGpM8v1', // 账号密钥
        version: 'v61',
    },
    calendar: {
        // 日历中的
        app_id: 'jdr8eahvuu0fjkre', // 账号ID
        app_secret: 'R1N3dURHeEhqdFBmbjB5V2luQlZlQT09', // 账号密钥
    },
}

const mutations = {
    UPDATE_DETAILS(state, data) {
        state.details = Object.assign({}, state.details, data)
    },
}

const actions = {}

const getter = {}

export default {
    state,
    mutations,
    actions,
    getter,
}
