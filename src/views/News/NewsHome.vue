<template>
    <div>aaaaaaaaaaaaaa</div>
</template>

<script>
import { mapState } from 'vuex'
import { newsTypes } from '@/api/news'
// import { newsTypes, newsList, newsDetails } from '@/api/news'
export default {
    name: 'NewsHome',
    data() {
        return {}
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        async getNews() {
            // eslint-disable-next-line no-unused-vars
            const res = await newsTypes({ ...this.calendar })

            // const res1 = await newsList({ ...this.calendar })
            // console.log(res)
            // const res2 = await newsDetails({ ...this.calendar })
            // console.log(res)
        },
    },
    created() {
        this.getNews()
    },
}
</script>

<style></style>
