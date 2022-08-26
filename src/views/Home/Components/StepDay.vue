<template>
    <div class="step">
        <div class="step__top">历史上的今天</div>
        <div v-for="(item, index) in newList.slice(0, 6)" :key="index">
            <span>{{ item.year }}-{{ item.month }}-{{ item.day }}</span>
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'StepDay',
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
        changeEventId() {
            axios({
                method: 'get',
                headers: {},
                url: 'https://www.mxnzp.com/api/history/today',
                params: {
                    type: 0,
                    ...this.calendar,
                },
            })
                .then((res) => {
                    this.newList = res.data.data
                    console.log(this.newList)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    created() {
        this.changeEventId()
    },
}
</script>

<style lang="scss" scoped>
@include b(step) {
    height: 300px;
    width: 300px;
    text-align: center;
    background: wheat;
    @include e(top) {
        height: 50px;
        width: 100%;
        line-height: 50px;
        background: skyblue;
        display: flex;
        justify-content: space-between;
        :first-child {
        }
        :last-child {
        }
    }
}
</style>
