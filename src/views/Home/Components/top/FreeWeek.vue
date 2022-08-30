<template>
    <div class="weather">
        <div class="weather__location">
            <span>{{ data.city }}</span>
            <span>更新时间:{{ data.update_time }}</span>
        </div>

        <ul class="weather__info">
            <li v-for="(item, index) in data.data" :key="index">
                <span>{{ item.date }}</span>
                <img
                    :src="require('@/assets/peach/' + item.wea_img + '.png')"
                />
                <p>{{ item.tem_day }}℃</p>
                <p>{{ item.wea }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { freeWeek } from '@/api/news'

export default {
    name: 'FreeWeek',
    data() {
        return {
            data: {},
        }
    },
    computed: {
        ...mapState({ freesky: (state) => state.user.freesky }),
    },
    methods: {
        // 获取天气
        async getTheWeather() {
            const res = await freeWeek({
                ...this.freesky,
            })
            this.data = res.data
            this.data.update_time = this.data.update_time.slice(5)
            this.data.data.forEach((data) => {
                data.date = data.date.replaceAll('-', '/').slice(5)
                data.wea = data.wea.slice(0, 2)
            })
        },
    },
    created() {
        this.getTheWeather()
    },
}
</script>

<style lang="scss" scoped>
@include b(weather) {
    background: url('@/assets/weather.png') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    width: 420px;
    color: white;
    height: 190px;
    border-radius: 20px;
    @include e(location) {
        display: flex;
        flex-direction: column;
        padding: 15px 20px 2px;
        text-align: left;
        font-weight: bold;
    }
    @include e(info) {
        display: flex;
        padding-top: 10px;
    }
}
</style>
