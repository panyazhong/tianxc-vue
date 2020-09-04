<template>
  <div class="">
    <page-title></page-title>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane label="个人信息" name="first">
        <user-info></user-info>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second">
        <change-pwd></change-pwd>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import userInfo from './components/userInfo'
import changePwd from './components/changePwd'
export default {
  data() {
    return {
      activeName: "first"
    }
  },
  components: {
    pageTitle,
    userInfo,
    changePwd
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-tabs {
  height: 500px;
}
</style>
