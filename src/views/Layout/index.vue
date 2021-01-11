<template>
  <div :class="device === 'pc' ? 'pc' : 'mobile'">
    <header-com></header-com>
    <menu-com></menu-com>
    <transition name="content" mode="out-in">
      <router-view class="content"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderCom from './components/header'
import MenuCom from './components/menu'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loadTime: null,
      leaveTime: null,
    }
  },
  components: {
    HeaderCom,
    MenuCom
  },
  mounted() {
    this.loadTime = new Date().getTime()
    console.log(navigator.sendBeacon)
    window.onbeforeunload = () => {
      this.leaveTime = new Date().getTime()

      // 当时间大于3s时才计算用户行为信息
      if (this.leaveTime - this.loadTime > 3 * 1000) {
        if (navigator.sendBeacon) {
          navigator.sendBeacon()
        } else {
          this.sendBehavior()
        }
      }

      return false
    }
  },
  computed: {
    ...mapGetters(['device'])
  },
  methods: {
    // 上传用户信息
    sendBeacon() {

    },
    sendBehavior() {}
  }
}
</script>

<style scoped lang="scss">
.content {
  padding: 80px 20px 20px 200px;
  height: 100vh;
  box-sizing: border-box;
}
.mobile,
.pad {
  .content {
    padding: 80px 20px 20px 56px;
  }
}
.content-enter-active,
.content-leave-active {
  transition: all 0.5s;
}

.content-enter,
.content-leave-to {
  opacity: 0;
  margin-left: 20px;
}
</style>
