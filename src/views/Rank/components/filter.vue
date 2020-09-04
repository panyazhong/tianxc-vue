<template>
  <div class="">
    <el-date-picker size="mini" v-model="year" type="year" placeholder="选择年">
    </el-date-picker>

    <el-button size="mini" type="primary" @click="handleSearch">查询</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      year: new Date()
    }
  },
  methods: {
    handleSearch() {
      const params = {
        year: new Date(this.year).getFullYear()
      }
      this.$emit('get-rank-list', params)
    }
  }
}
</script>

<style scoped lang="scss">
.el-button {
  margin-left: 20px;
}
</style>
