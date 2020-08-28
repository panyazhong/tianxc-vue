<template>
  <div class="">
    <header-com></header-com>
    <menu-com></menu-com>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import HeaderCom from './components/header'
import MenuCom from './components/menu'
export default {
  data() {
    return {

    }
  },
  components: {
    HeaderCom,
    MenuCom
  },
  methods: {

  }
}
</script>

<style scoped lang="scss"></style>
