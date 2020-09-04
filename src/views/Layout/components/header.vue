<template>
  <div class="header-box">
    <div class="logo">
      <img src="@/assets/favicon.png" alt="" />
    </div>
    <div>
      <el-button @click="handleLogin" type="text" v-if="!user.username"
        >点击登录</el-button
      >
      <div v-else>
        <span class="el-dropdown-link">
          {{ user.realname }}
        </span>
        <el-button type="text" @click="handleLogout">注销</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    handleLogin() {
      this.$router.push('/login')
    },
    async handleLogout() {
      try {
        await this.$confirm('确认退出当前用户？', '提示')
        this.$store.dispatch('HandleLogout')
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-box {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  .logo {
    height: 60px;
    img {
      height: 100%;
    }
  }
}
</style>
