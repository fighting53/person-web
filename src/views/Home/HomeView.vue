<template>
    <div class="home">
        <TopIndex></TopIndex>

        <div class="home__main">
            <div class="home__main--aside">
                <StepDay></StepDay>
            </div>

            <div class="home__main--module">
                <div class="home__main--module-header">
                    <div class="home__main--module-currentTime">
                        <span>{{ dataMin }}</span>
                        <span>{{ dataYear }}</span>
                        <span>{{ sentence }}</span>
                    </div>
                    <!-- <div class="home__main--module-visit">
                        <span>访问量：</span>
                        <span>{{ number }}</span>
                    </div> -->
                </div>

                <div class="home__main--module-props">
                    <WatchBook></WatchBook>
                    <!-- <FreeWeek></FreeWeek> -->
                    <!-- <CalendarProp></CalendarProp> -->
                </div>
                <div class="home__main--module-middle">
                    <!-- <WatchBook></WatchBook> -->
                </div>
            </div>
            <div class="home__main--right">
                <HoroScope></HoroScope>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import TopIndex from '@/components/TopIndex.vue'
import StepDay from './Components/StepDay.vue'
import { mapState } from 'vuex'
// import { recommend } from '@/api/news'
const allComponents = require.context('./Components/top', true, /\.vue$/)
const middleComponents = require.context('./Components/middle', true, /\.vue$/)
let res_components = {}
let middle_components = {}
allComponents.keys().forEach((item) => {
    let comp = allComponents(item)
    let name = comp.default.name
    res_components[name] = comp.default
})
middleComponents.keys().forEach((item) => {
    let comp = middleComponents(item)
    let name = comp.default.name
    middle_components[name] = comp.default
})
export default {
    name: 'HomeView',
    components: { ...res_components, TopIndex, StepDay, ...middle_components },
    data() {
        return {
            imgList: [],
            number: 0,
            data: {},
            times: '',
            sentence: '',
            dataYear: new Date().toLocaleDateString(),
            dataMin: new Date().toTimeString().slice(0, 5),
        }
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        slipTo() {
            // var result = document.querySelectorAll(
            //     '.home__main--module-visit span'
            // )
            // if (localStorage.clickcount)
            //     localStorage.clickcount = Number(localStorage.clickcount) + 1
            // else localStorage.clickcount = 1
            // result[1].innerHTML = localStorage.clickcount
        },
        async getSentence() {
            // const res = await recommend({
            //     count: 1,
            //     ...this.calendar,
            // })
        },
    },
    created() {
        this.number = Number(localStorage.clickcount) + 1
        this.getSentence()
    },
    mounted() {
        this.slipTo()
    },
}
</script>

<style lang="scss" scoped>
@include b(home) {
    @extend %background;
    position: relative;

    @include e(main) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        @include m(aside) {
            width: 300px;
            height: 700px;
        }

        @include m(module) {
            position: relative;
            width: 920px;
            background: white;
            border-radius: 1%;
            margin-top: 30px;
            &-header {
                @extend %flex-center-end;
                width: 100%;
                height: 60px;
                padding-top: 50px;
            }
            &-currentTime {
                display: flex;
                flex-direction: column;

                padding-right: 45%;
                :first-child {
                    font-size: 50px;
                    font-weight: bold;
                    color: green;
                }
                :last-child {
                    color: burlywood;
                    font-size: 25px;
                    font-weight: bold;
                }
            }
            &-visit {
                width: 140px;
                height: 50px;
                line-height: 50px;
                margin-right: 40px;
                background: #cce6e6;
                color: green;
                border-radius: 48%;
            }
            &-props {
                margin-top: 62px;
                width: 100%;
                // height: 190px;
                display: flex;
                justify-content: space-between;
                padding: 5px 0 0 5px;
            }
            &-middle {
                margin-top: 56px;
                height: 220px;
            }
        }
        @include m(right) {
            width: 260px;
        }
    }
}
</style>
