<template>
  <div>
    <div class="filter">
      <el-input
        placeholder="用户名"
        size="mini"
        v-model="account"
        clearable
      ></el-input>

      <el-button type="primary" size="mini" @click="searchUser">查询</el-button>
      <el-button type="primary" size="mini" @click="addUser"
        >新增用户</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: '',
    };
  },
  methods: {
    addUser() {
      this.$emit('add-user');
    },
    searchUser() {
      this.$emit('search-user', this.account);
    },
  },
};
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  ::v-deep .el-input {
    width: 200px;
    margin-right: 10px;
  }
}
</style>
