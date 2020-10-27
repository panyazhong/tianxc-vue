<template>
  <div>
    <div id="line-chart" :style="{ height: height }"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  data() {
    return {
      myChart: '',
    };
  },
  props: {
    width: {},
    height: {},
    lineData: {},
  },
  mounted() {
    this.initChart();
  },
  watch: {
    lineData: {
      deep: true,
      handler() {
        this.changeChart();
      },
    },
  },
  methods: {
    initChart() {
      this.myChart = echarts.init(document.getElementById('line-chart'));

      let option = {
        title: {
          text: '年度排行统计',
        },
        tooltip: {},
        legend: {
          data: ['排名'],
        },
        grid: {
          left: 30,
          right: 30,
          top: 80,
        },
        xAxis: {
          data: [],
        },
        yAxis: {
          minInterval: 1,
          max: 59,
          name: '名次',
        },
        series: [],
      };
      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option);
    },
    changeChart() {
      let options = this.myChart.getOption(),
        { series, xAxis } = options;

      (series = []), (xAxis = []);
      xAxis.push({
        boundaryGap: false,
        data: this.lineData.map((item) => `${item.rank_time}月`),
      });
      series.push({
        name: '排名',
        type: 'line',
        barMaxWidth: 30,
        data: this.lineData.map((item) => item.rank),
      });
      options.series = series;
      options.xAxis = xAxis;

      this.myChart.setOption(options);
    },
  },
};
</script>

<style scoped lang="scss">
#line-chart {
  width: calc(100vw - 220px);
}
</style>
