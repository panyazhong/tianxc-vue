<template>
  <div class="header-box">
    <div>
      Logo
    </div>
    <div>
      <el-button @click="handleLogin">{{ user }}</el-button>
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
}
</style>
