<template>
  <div class="">
    <page-title></page-title>
    <line-chart :height="height"></line-chart>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import lineChart from './components/echarts'
export default {
  data() {
    return {
      width: '600px',
      height: '400px'
    }
  },
  components: {
    pageTitle,
    lineChart
  },
  methods: {

  }
}
</script>

<style scoped lang="scss"></style>
