<template>
  <div class="">
    <div>
      <el-radio-group v-model="type" @change="choosefilter" size="mini">
        <el-radio-button label="month">月度红黄牌表格</el-radio-button>
        <el-radio-button label="year">年度红黄牌图片</el-radio-button>
      </el-radio-group>
    </div>
    <div class="statistics-month">
      <span>选择统计年/月份</span>
      <el-date-picker
        v-model="date"
        size="mini"
        :type="type"
        placeholder="点击选择"
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
        type: this.type,
        date: this.date
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
