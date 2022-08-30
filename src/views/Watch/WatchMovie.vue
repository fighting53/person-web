<template>
    <div class="watch">
        <TopIndex></TopIndex>

        <div class="watch__content">
            <p class="watch__content--label">2022年8月20日</p>
            <div>
                <img />
                <p>
                    <span>主演:{{}}</span>
                    <span>导演:{{}}</span>
                    <span>评分:{{}}</span>
                    <span>影评:{{}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import TopIndex from '@/components/TopIndex.vue'
export default {
    name: 'WatchMovie',
    components: { TopIndex },
    methods: {},
}
</script>

<style lang="scss" scoped>
@include b(watch) {
    @extend %background;
    text-align: left;
    @include e(add) {
        text-align: right;
        padding: 10px;
        font-size: 20px;
    }
    @include e(content) {
        background: white;
        // margin: 50px;
        width: 100%;
        height: 200px;
        // margin: 30px;
        @include m(label) {
            font-size: 20px;
            color: green;
        }
    }
}
</style>
