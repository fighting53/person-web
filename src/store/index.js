import utils from '@/utils'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', false, /\.js$/)

const plugins = [
    createPersistedState({
        key: 'key-' + utils.generateID(),
        storage: window.sessionStorage,
        paths: ['user.userInfo'],
    }),
]

// 自动引入module中的子模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules,
    plugins,
})
