<template>
  <div class="login-page">
    <div class="login-form">
      <h3>登&nbsp;录</h3>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        class="demo-loginForm"
      >
        <el-form-item label="" prop="username">
          <el-input
            type="password"
            v-model="loginForm.username"
            autocomplete="off"
            placeholder="username"
          ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请填写用户名' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请填写密码' }
        ],
      }
    }
  },
  methods: {
    async submitForm(formName) {
      try {
        await this.$refs[formName].validate()
        await this.$store.dispatch('handleLogin',  this.loginForm)

        const { redirect } = this.$route.query

        this.$router.push({
            path: this.redirect || "/"
          },
          onComplete => { },
          onAbort => { }
        )

      } catch (error) {
        console.log(error);
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  background: #efefef;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .login-form {
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px #ccc;
    background: #fff;
    border-radius: 5px;
    width: 350px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    h3 {
      text-align: center;
      margin: 10px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
