import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/Home/HomeView.vue'

Vue.use(VueRouter)

//解决点击不能出现问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Home/HomeView.vue'
            ),
        meta: '首页',
    },
    {
        path: '/book',
        name: 'ReadBook',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Read/ReadBook.vue'
            ),
        meta: '书籍',
    },
    {
        path: '/movie',
        name: 'WatchMovie',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Watch/WatchMovie.vue'
            ),
        meta: '电影',
    },
    {
        path: '/news',
        name: 'NewsHome',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/News/NewsHome.vue'
            ),
        meta: '新闻',
    },
    {
        path: '/news/list',
        name: 'NewsList',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/News/NewsList.vue'
            ),
        meta: '新闻',
    },
    {
        path: '/plan',
        name: 'PlanHome',
        component: () =>
            import(
                /* webpackChunkName: "about" */ '../views/Plan/PlanHome.vue'
            ),
        meta: '计划',
    },

    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // },
]

const router = new VueRouter({
    routes,
})

export default router
