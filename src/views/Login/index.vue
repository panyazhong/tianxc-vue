<template>
  <div class="login-page" :class="device === 'mobile' ? 'mobile' : 'pc'">
    <div class="login-contain">
      <div class="login-left">
        <p class="main-title">创新，与智慧同行</p>
        <p class="second-title">
          让每一次追求美好生活路上的并肩突破，都成就一场智慧的变革
        </p>
        <p class="second-title">你向往的日子，就是智慧该有的样子</p>
      </div>
      <div class="login-form">
        <h3>登&nbsp;录</h3>
        <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          size="mini"
          ref="loginForm"
          class="demo-loginForm"
        >
          <el-form-item label="" prop="account">
            <el-input
              type="text"
              v-model="loginForm.account"
              autocomplete="off"
              placeholder="account"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="password"
              autocomplete="off"
              @keyup.enter.native="submitForm('loginForm')"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, trigger: 'blur', message: '请填写用户名' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请填写密码' }
        ],
      },
    }
  },
  computed: {
    ...mapGetters(['device'])
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
  position: absolute;
  // background: rgba(32, 157, 230, 1) url('../../assets/banner.png') center
  //   center/contain no-repeat;
  // background: url('../../assets/banner.png'),
  //   linear-gradient(103deg, rgba(32, 157, 230, 1), rgba(55, 222, 242, 1));
  background: url('../../assets/banner.png'),
    linear-gradient(103deg, rgba(191, 0, 25, 0.9), rgba(236, 49, 60, 0.9));
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .login-contain {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 800px;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    .login-left {
      width: 400px;
      color: #fff;
      .main-title {
        font-size: 32px;
        margin: 10px;
      }
      .second-title {
        font-family: 'Hiragino Sans GB';
        font-size: 16px;
        margin: 5px 10px;
      }
    }
    .login-form {
      width: 300px !important;
      border: 1px solid #fff;
      padding: 20px;
      border-radius: 5px;
      background: rgba($color: #fff, $alpha: 0.9);
      h3 {
        text-align: center;
        margin: 10px;
        color: rgba(236, 49, 60, 1);
      }
      .el-button {
        width: 100%;
        letter-spacing: 20px;
        text-indent: 20px;
        background-color: rgba(236, 49, 60, 1);
        border: none;
      }
    }
  }
}
.mobile {
  .login-contain {
    width: 300px;
    .login-left {
      display: none;
    }
  }
}
</style>
