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

    }
  },
  components: {
    HeaderCom,
    MenuCom
  },
  computed: {
    ...mapGetters(['device'])
  },
  methods: {

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
