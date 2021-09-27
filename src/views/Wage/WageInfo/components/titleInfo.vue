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

      <el-button type="danger" size="mini" @click="deleteWage">删除</el-button>

      <el-button type="primary" size="mini" @click="downloadExcel"
        >下载表格</el-button
      >
    </div>

    <DeleteDialog ref="deleteRef" @deleteSuccess="searchWage"></DeleteDialog>
  </div>
</template>

<script>
import DeleteDialog from './deleteDialog';
export default {
  data() {
    return {
      month: '',
    };
  },
  components: {
    DeleteDialog,
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
    deleteWage() {
      this.$refs.deleteRef.show();
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
