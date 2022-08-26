<template>
    <div class="calender">
        <div class="calender__location">
            <div class="calender__location--left">
                <p class="calender__location--left-time">
                    <span>今年第</span>
                    <span>{{ data.dayOfYear }}天</span>
                </p>
                <p class="calender__location--left-time">
                    <span>今年第</span>
                    <span>{{ data.weekOfYear }}周</span>
                </p>
            </div>
        </div>
        <div class="calender__location">
            <div class="calender__location--middle">
                <div class="calender__location--middleTop">
                    <div class="calender__location--middleTop-month">
                        {{ new Date().getMonth() + 1 }}月
                    </div>
                    <div class="calender__location--middleTop-day">
                        {{ new Date().getDate() }}
                    </div>
                </div>

                <div class="calender__location--middleBottom">
                    <p>
                        {{ data.chineseZodiac }}
                    </p>
                    <p class="calender__location--middleBottom-lunar">
                        {{ data.lunarCalendar }}
                    </p>
                </div>
            </div>
        </div>
        <div class="calender__location">
            <div class="calender__location--bottom">
                <div class="calender__location--bottom-suit">
                    <p>宜</p>
                    <span>{{ data.suit }}</span>
                </div>
                <div class="calender__location--bottom-suit">
                    <p>忌</p>
                    <span>{{ data.avoid }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: 'CalendarProp',
    data() {
        return {
            data: {},
            dataYear: new Date().toISOString().slice(0, 10).replaceAll('-', ''),
        }
    },
    computed: {
        ...mapState({ calendar: (state) => state.user.calendar }),
    },
    methods: {
        // 获取天气
        getThecalender() {
            // 先通过接口请求一次当前天气状况
            axios({
                methods: 'get',
                url:
                    'https://www.mxnzp.com/api/holiday/single/' + this.dataYear,
                headers: {},
                params: {
                    ignoreHoliday: true,
                    ...this.calendar,
                },
            })
                .then((res) => {
                    this.data = res.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
    created() {
        this.getThecalender()
    },
}
</script>

<style lang="scss" scoped>
@include b(calender) {
    background: burlywood;
    display: flex;
    width: 420px;
    height: 190px;
    border-radius: 20px;
    @include e(location) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px 10px 2px;
        text-align: left;
        font-weight: bold;
        @include m(left) {
            width: 100px;
        }
        @include m(middle) {
            width: 120px;
            height: 160px;
            padding: 8px 0 0;
            text-align: center;
        }
        @include m(middleTop) {
            height: 100px;
            background: white;
            border-radius: 10%;
            &-month {
                background: skyblue;
                height: 36px;
                line-height: 36px;
                color: white;
                font-size: 26px;
                border-top-left-radius: 15%;
                border-top-right-radius: 15%;
            }
            &-day {
                height: 70px;
                line-height: 70px;
                color: burlywood;
                font-size: 35px;
            }
        }
        @include m(middleBottom) {
            padding-top: 5px;
            &-lunar {
                padding-top: 2px;
            }
        }
        @include m(bottom) {
            width: 150px;
            display: flex;
            &-suit {
                p {
                    color: cadetblue;
                }
            }
        }
    }
    @include e(left right) {
        width: 30%;
    }
}
</style>
