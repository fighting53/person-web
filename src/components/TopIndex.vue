<template>
    <div>
        <header class="headerTop">
            <ul class="headerTop__nav">
                <li
                    v-for="(item, index) in routeList"
                    :key="index"
                    class="headerTop__nav--li"
                    @click="slipTo(item.path)"
                >
                    {{ item.meta }}
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
export default {
    name: 'TopIndex',
    data() {
        return {
            routeList: [
                { meta: '首页', path: '/home' },
                { meta: '书籍', path: '/book' },
                { meta: '电影', path: '/movie' },
                { meta: '新闻', path: '/news' },
                { meta: '计划', path: '/plan' },
            ],
        }
    },
    methods: {
        slipTo(item) {
            this.$router.push(item)
        },
    },
    created() {},
}
</script>

<style lang="scss" scoped>
@include b(headerTop) {
    width: 100%;
    height: 40px;
    background-color: #cce6e6;
    // position: fixed;
    @include e(nav) {
        @extend %flex-center-center;
        display: flex;
        @include m(li) {
            width: 100px;
            line-height: 40px;
            color: green;
        }
    }
}
</style>
