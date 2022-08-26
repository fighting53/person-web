<template>
    <div class="home">
        <header class="home__header">
            <ul class="home__header--nav">
                <li
                    v-for="(item, index) in routeList"
                    :key="index"
                    class="home__header--nav-li"
                    @click="slipTo(item.path)"
                >
                    {{ item.meta }}
                </li>
            </ul>
        </header>

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
            </div>
        </div>
    </div>
</template>

<script>
const allComponents = require.context('./Components', true, /\.vue$/)
let res_components = {}
allComponents.keys().forEach((item) => {
    let comp = allComponents(item)
    let name = comp.default.name
    res_components[name] = comp.default
})
export default {
    name: 'HomeView',
    components: { ...res_components },
    data() {
        return {
            routeList: [],
            imgList: [],
            number: 0,
            data: {},
            times: '',
            dataYear: new Date().toLocaleDateString(),
            dataMin: new Date().toTimeString().slice(0, 5),
        }
    },
    methods: {
        slipTo(item) {
            var result = document.querySelectorAll(
                '.home__main--module-visit span'
            )
            if (localStorage.clickcount)
                localStorage.clickcount = Number(localStorage.clickcount) + 1
            else localStorage.clickcount = 1
            result[1].innerHTML = localStorage.clickcount
            this.$router.push(item)
        },
    },
    created() {
        this.number = Number(localStorage.clickcount) + 1
        this.routeList = this.$router.getRoutes()
    },
}
</script>

<style lang="scss" scoped>
@include b(home) {
    @extend %background;
    position: relative;
    @include e(header) {
        width: 100%;
        height: 40px;
        background-color: #cce6e6;
        // position: fixed;
        @include m(nav) {
            @extend %flex-center-center;
            display: flex;
            &-li {
                width: 100px;
                line-height: 40px;
                color: green;
            }
        }
    }
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
            box-shadow: 10px 10px 5px #cce6e6;
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
        }
    }
}
</style>
