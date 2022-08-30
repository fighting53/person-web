<template>
    <div>
        <aside class="aside">
            <ul>
                <li
                    v-for="(item, index) in dataList"
                    :key="index"
                    @click="clickNews(item.typeId)"
                    class="aside-list"
                >
                    {{ item.typeName }}
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { newsTypes } from '@/api/news'
// import { newsTypes, newsList, newsDetails } from '@/api/news'
export default {
    name: 'NewsAside',
    data() {
        return {
            dataList: [],
        }
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        async getNews() {
            const res = await newsTypes({
                ...this.calendar,
            })
            this.dataList = res.data.data
        },
        clickNews(item) {
            this.$emit('event', item)
        },
    },
    created() {
        this.getNews()
    },
}
</script>

<style lang="scss" scoped>
.aside {
    width: 250px;
    min-height: 100vh;
    text-align: right;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: bold;
    color: cadetblue;
    .aside-list {
        padding-top: 14px;
    }
}
</style>
