<template>
    <div class="news">
        <TopIndex></TopIndex>
        <div class="news__main">
            <NewsAside @event="changeEventId"></NewsAside>

            <div key="news__main--content">
                <div
                    v-for="(item, index) in newList"
                    :key="index"
                    @click="clickNews(item.newsId)"
                    class="news__main--content-block"
                >
                    <p class="news__main--content-blockFirst">
                        {{ item.title }}
                    </p>

                    <p class="news__main--content-blockSecond">
                        <img />
                        <span>{{ item.digest }}</span>
                    </p>
                    <p class="news__main--content-blockThird">
                        <span>{{ item.source }}</span>
                        <span>{{ item.content }}</span>
                        <span>{{ item.postTime }}</span>
                    </p>

                    <!-- <p>{{ item.images }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import TopIndex from '@/components/TopIndex.vue'
import NewsAside from './components/NewsAside.vue'

// import { newsTypes } from '@/api/news'
// import { newsTypes, newsList, newsDetails } from '@/api/news'
export default {
    name: 'NewsHome',
    components: { TopIndex, NewsAside },
    data() {
        return {
            newList: [],
            typeId: '',
        }
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        changeEventId(val) {
            axios({
                method: 'get',
                headers: {},
                url: 'https://www.mxnzp.com/api/news/list',
                params: {
                    typeId: val,
                    page: '1',
                    ...this.calendar,
                },
            })
                .then((res) => {
                    this.newList = res.data.data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        clickNews(item) {
            this.$router.push({
                path: '/news/list',
                query: {
                    newsId: item,
                },
            })
        },
    },
    created() {
        // this.clickNews()
    },
}
</script>

<style lang="scss" scoped>
@include b(news) {
    @extend %background;
    position: relative;
    @include e(main) {
        width: 100%;
        height: 100%;
        display: flex;
        @include m(content) {
            width: 100%;
            height: 500px;
            &-block {
                width: 80%;
                height: 100px;
                margin-top: 10px;
                // background: blanchedalmond;
                text-align: left;
            }
            &-blockFirst {
                font-size: 20px;
                font-weight: bold;
            }
            &-blockSecond {
                text-align: justify;
                display: flex;
            }
            &-blockThird {
                display: flex;
            }
        }
    }
}
</style>
