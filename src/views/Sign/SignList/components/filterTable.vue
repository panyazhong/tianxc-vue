<template>
  <el-row>
    <el-input
      type="text"
      size="mini"
      v-model="name"
      placeholder="名称"
      clearable
    ></el-input>
    <el-button type="primary" size="mini" @click="searchSign">搜索</el-button>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    searchSign() {
      this.$emit('search-name', this.name);
    },
  },
};
</script>

<style>
.el-input {
  width: 200px;
  margin-right: 20px;
}
</style>
