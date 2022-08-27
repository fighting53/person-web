<template>
    <div id="main" ref="main" style="width: 500px; height: 300px"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'WatchBook',
    data() {
        return {
            xData: [],
            data: [5, 20, 36, 10, 10, 20, 12],
        }
    },
    methods: {
        bar() {
            const month = new Date().toISOString().slice(5, 7).replace('0', '')
            const timea = new Date().getDate()
            let i = 1
            while (i < 8) {
                this.xData.push(month + '/' + (timea - 7 + i))
                i++
            }
            var myChart = echarts.init(document.getElementById('main'))
            var option = {
                title: {
                    text: '一周读书量',
                    textStyle: {
                        align: 'center',
                    },
                },
                tooltip: {},
                legend: {
                    data: [''],
                },
                xAxis: {
                    data: this.xData,
                },
                yAxis: {},
                series: [
                    {
                        name: '',
                        type: 'line',
                        data: this.data,
                    },
                ],
            }
            myChart.setOption(option)
        },
    },
    mounted() {
        this.bar()
    },
}
</script>

<style lang="scss" scoped></style>
