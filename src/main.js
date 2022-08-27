import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './style/reset.scss'
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
    router,
    store,
    style,
    render: (h) => h(App),
}).$mount('#app')
