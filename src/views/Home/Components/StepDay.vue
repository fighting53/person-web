<template>
    <div class="step">
        <div class="step__top">历史上的今天</div>
        <div v-for="(item, index) in newList" :key="index" class="step__block">
            <span>{{ item.year }}-{{ item.month }}-{{ item.day }}</span>
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { historyToday } from '@/api/news'

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
        async changeEventId() {
            const res = await historyToday({ type: 0, ...this.calendar })
            this.newList = res.data.data
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
    width: 100%;
    padding-top: 30px;
    @include e(top) {
        height: 50px;
        width: 100%;
        text-align: center;
        // padding-left: 25%;
        line-height: 50px;
        background: rgba(135, 206, 235, 0.3);
        // border-radius: 10%;
        // justify-content: space-between;
    }
    @include e(block) {
        display: flex;
        flex-direction: column;
        text-align: left;
        background: #bde1f04d;
        :first-child {
            padding: 10px;
            font-weight: 600;
        }
        :last-child {
            padding: 0px 7px;
        }
    }
}
</style>
