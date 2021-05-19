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
