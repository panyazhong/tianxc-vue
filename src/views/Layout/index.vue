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
import { getToken, getUserBehavior, removeUserBehavior } from '@/utils/cookie'

import { sendBeacon } from '@/api/beacon'

const ENV = process.env.NODE_ENV

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
    this.loadTime = Date.now()
    window.onbeforeunload = () => {
      this.leaveTime = Date.now()

      // 当时间大于6s时才计算用户行为信息
      if (!navigator.sendBeacon && token) {
        if (this.leaveTime - this.loadTime > 6 * 1000) {
          let fd = this.gengerateFormData(token)

          let xhr = new XMLHttpRequest()
          let url = ENV === 'development' ?
            `http://localhost:3000/api/behavior/send` :
            `/api/behavior/send`
          xhr.open('post', url, false)
          xhr.send(fd)
        }
        return false
      }
    }

    window.addEventListener("unload", (e) => {
      // this.sendBeacon()
    })
  },
  computed: {
    ...mapGetters(['device'])
  },
  methods: {
    gengerateFormData(token) {
      let behavior = getUserBehavior()
      console.log(behavior)
      let fd = new FormData()
      fd.append('token', token)
      fd.append('load_time', this.loadTime)
      fd.append('leave_time', this.leaveTime)
      fd.append('behavior', behavior)
      fd.append('type', 'leave')

      return fd
    },
    // 上传用户信息
    sendBeacon() {
      let token = getToken()
      if (navigator.sendBeacon && !!token) {
        this.leaveTime = Date.now()
        if (this.leaveTime - this.loadTime > 6 * 1000) {
          let fd = this.gengerateFormData(token)

          let url = ENV === 'development' ?
            `http://localhost:3000/api/behavior/send` :
            `/api/behavior/send`
          navigator.sendBeacon(url, fd)
          removeUserBehavior()
        }
      }
    },
    unloadHandler() {}
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
