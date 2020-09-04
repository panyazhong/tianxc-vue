<template>
  <div class="form-container">
    <el-form label-width="80px" size="mini" :model="formLabelAlign">
      <el-form-item label="用户名">
        <span>name</span>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-form {
  width: 500px;
  ::v-deep .el-form-item__label {
    font-size: 13px;
  }
}
</style>
