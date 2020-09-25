<template>
  <div class="form-container">
    <el-form label-width="80px" size="mini">
      <el-form-item label="用户名">
        <span>{{ user.account }}</span>
      </el-form-item>
      <el-form-item label="姓名">
        <span>{{ user.username }}</span>
      </el-form-item>
      <el-form-item label="区县">
        <span v-if="user.district">{{ user.district }}</span>
        <span v-else> --- </span>
      </el-form-item>
      <el-form-item label="网格">
        <span v-if="user.net">{{ user.net }}</span>
        <span v-else> --- </span>
      </el-form-item>
      <el-form-item label="手机号">
        <span v-if="user.telephone"
          >{{ user.telephone.substr(0, 3) }}****{{
            user.telephone.substr(-3)
          }}</span
        >
        <span v-else> --- </span>
      </el-form-item>
      <el-form-item label="角色">
        <span>{{ user.role.role_name }}</span>
      </el-form-item>
      <el-form-item label="注册时间">
        <span>{{
          user.created ? timeFormat(new Date(user.created).getTime()) : ''
        }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { getUserInfo } from '@/api/user'
import { timeFormat } from '@/utils/time'
export default {
  data() {
    return {
      user: {role: {}, telephone: ''},
      timeFormat: timeFormat
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      try {
        const { data } = await getUserInfo()
        this.user = data
      } catch (error) {

      }

    }
  }
}
</script>

<style scoped lang="scss">
.el-form {
  width: 500px;
  .el-form-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ::v-deep .el-form-item__label {
      font-size: 13px;
    }
    ::v-deep .el-form-item__content {
      margin-left: 20px !important;
    }
    span {
      font-size: 13px;
      color: #666;
    }
  }
}
</style>
