<template>
    <div class="satr">
        <p class="satr__label">星座运势</p>
        <div
            v-for="(item, index) in newslist"
            :key="index"
            class="satr__location"
        >
            <span class="satr__location--label">{{ item.type }}:</span>
            <span class="satr__location--text">{{ item.content }}</span>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'HoroScope',
    data() {
        return {
            key: '6de0be4931595ef8f06bc676bf905c8e',
            newslist: [],
        }
    },
    methods: {
        star() {
            // axios({
            //     methods: 'get',
            //     url: 'http://api.tianapi.com/star/index',
            //     headers: {},
            //     params: {
            //         key: this.key,
            //         astro: 'aries',
            //     },
            // })
            //     .then((res) => {
            //         this.newslist = res.data.newslist
            //         console.log(this.newslist)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
        },
    },
    created() {
        this.star()
    },
}
</script>

<style lang="scss" scoped>
@include b(satr) {
    width: 100%;
    height: 550px;
    border-radius: 20px;
    margin-top: 120px;
    border: 1px;
    text-align: left;
    background: #f0ffff;
    @include e(label) {
        opacity: 0.6;
        height: 40px;
        line-height: 40px;
        padding-left: 35%;
        font-size: 26px;
        border-top-left-radius: 50%;
    }
    @include e(location) {
        width: 100%;
        padding: 7px 10px;
        @include m(label) {
        }
        @include m(text) {
            font-size: 18px;
            color: cadetblue;
            padding-left: 8px;
        }
    }
}
</style>
