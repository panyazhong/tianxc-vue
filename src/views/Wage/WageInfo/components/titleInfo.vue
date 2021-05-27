<template>
  <div class="title">
    <div>
      <el-date-picker
        v-model="month"
        type="month"
        placeholder="选择月"
        size="mini"
        value-format="yyyy-MM"
      >
      </el-date-picker>

      <el-button type="primary" size="mini" @click="searchWage">查询</el-button>

      <el-button type="primary" size="mini" @click="downloadExcel"
        >下载表格</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: '',
    };
  },
  methods: {
    searchWage() {
      let params;
      if (this.month) {
        params = {
          time: this.month,
        };
      }
      this.$emit('searchWage', params);
    },
    downloadExcel() {
      this.$emit('download2Excel');
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 20px;
  .el-button {
    margin-left: 20px;
  }
}
</style>
