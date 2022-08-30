<template>
    <div class="list">
        <TopIndex></TopIndex>
        <div class="list__main">
            <div
                v-for="(item, index) in newList"
                :key="index"
                class="list__main--content"
            >
                <p>
                    <span>{{ item.title }}</span>
                    <span>{{ item.source }}</span>
                    <span>{{ item.ptime }}</span>
                    <span>{{ item.cover }}</span>
                </p>
                <!-- <img src /> -->
                <p>{{ item.content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import TopIndex from '@/components/TopIndex.vue'
import { listDetails } from '@/api/news'

export default {
    name: 'listHome',
    components: { TopIndex },
    data() {
        return {
            newList: [],
        }
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        async clicklist() {
            const res = await listDetails({
                newsId: this.$route.query.newsId,
                ...this.calendar,
            })
            this.newList = res.data.data
        },
    },
    created() {
        this.clicklist()
    },
}
</script>

<style lang="scss" scoped>
@include b(list) {
    @extend %background;
    position: relative;
    @include e(main) {
        width: 80%;
        @include m(content) {
            width: 100%;
            height: 500px;
        }
    }
}
</style>
