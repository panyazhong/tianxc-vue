<template>
  <div class="">
    <page-title></page-title>
    <div>
      <!-- <filter-table @get-rank-list="getRankList"></filter-table> -->

      <el-alert title="资料正在上传中...请稍后..." type="warning"> </el-alert>
      <!-- <line-chart
        class="line"
        :height="height"
        :lineData="lineData"
      ></line-chart> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import filterTable from './components/filter'
import lineChart from './components/echarts'

import { getRank } from '@/api/rank'
export default {
  data() {
    return {
      width: '600px',
      height: '400px',
      lineData: []
    }
  },
  components: {
    pageTitle,
    lineChart,
    filterTable
  },
  created() {
    this.getRankList()
  },
  methods: {
    async getRankList(p) {
      try {
        const params = {
          ...p
        }
        const {data} = await getRank(params)
        this.lineData = data
      } catch (error) {

      }

    }
  }
}
</script>

<style scoped lang="scss">
.line {
  margin-top: 20px;
}
</style>
