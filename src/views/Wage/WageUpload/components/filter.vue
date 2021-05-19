<template>
  <div class="">
    <div class="statistics-month">
      <span>选择统计月份</span>
      <el-date-picker
        v-model="date"
        size="mini"
        :type="type"
        placeholder="点击选择"
        value-format="yyyy-MM"
        @change="choosefilter"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      type: 'month',
      date: ''
    }
  },
  methods: {
    choosefilter() {
      const params = {
        time: this.date
      }
      this.$emit('choose-filter', params)
    }
  }
}
</script>

<style scoped lang="scss">
.statistics-month {
  margin: 10px 0px;
  color: #666;
  font-size: 14px;
  span {
    margin-right: 10px;
  }
}
</style>
