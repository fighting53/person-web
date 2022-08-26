<template>
    <div class="home">
        <TopIndex></TopIndex>

        <div class="home__main">
            <div class="home__main--aside"></div>

            <div class="home__main--module">
                <div class="home__main--module-header">
                    <div class="home__main--module-currentTime">
                        <span>{{ dataMin }}</span>
                        <span>{{ dataYear }}</span>
                    </div>
                    <div class="home__main--module-visit">
                        <span>访问量：</span>
                        <span>{{ number }}</span>
                    </div>
                </div>

                <div class="home__main--module-props">
                    <FreeWeek></FreeWeek>
                    <CalendarProp></CalendarProp>
                </div>
                <div class="home__main--module-middle">
                    <StepDay></StepDay>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopIndex from '@/components/TopIndex.vue'
const allComponents = require.context('./Components', true, /\.vue$/)
let res_components = {}
allComponents.keys().forEach((item) => {
    let comp = allComponents(item)
    let name = comp.default.name
    res_components[name] = comp.default
})
export default {
    name: 'HomeView',
    components: { ...res_components, TopIndex },
    data() {
        return {
            imgList: [],
            number: 0,
            data: {},
            times: '',
            dataYear: new Date().toLocaleDateString(),
            dataMin: new Date().toTimeString().slice(0, 5),
        }
    },
    methods: {
        slipTo() {
            var result = document.querySelectorAll(
                '.home__main--module-visit span'
            )
            if (localStorage.clickcount)
                localStorage.clickcount = Number(localStorage.clickcount) + 1
            else localStorage.clickcount = 1
            result[1].innerHTML = localStorage.clickcount
        },
    },
    created() {
        this.number = Number(localStorage.clickcount) + 1
    },
    mount() {
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
        width: 100%;
        height: 100%;
        background: #cce6e6;
        @include m(aside) {
            width: 250px;
            height: 700px;
        }

        @include m(module) {
            position: relative;
            width: 75%;
            background: white;
            border-radius: 1%;
            // box-shadow: 10px 10px 5px #cce6e6;
            &-header {
                @extend %flex-center-end;
                width: 100%;
                height: 60px;
                padding-top: 50px;
            }
            &-currentTime {
                display: flex;
                flex-direction: column;
                padding-right: 410px;
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
                margin-right: 10px;
                background: #cce6e6;
                color: green;
                border-radius: 48%;
            }
            &-props {
                margin-top: 56px;
                width: 100%;
                height: 190px;
                // background: #cce6e6;
                display: flex;
                justify-content: space-around;
                padding: 5px 0 0 5px;
            }
            &-middle {
                height: 200px;
            }
        }
    }
}
</style>
