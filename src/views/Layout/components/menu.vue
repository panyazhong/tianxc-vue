<template>
  <div class="menu-box">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">概览</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资料</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/material/upload">上传</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">下载</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.menu-box {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0px;
  background-color: #545c64;
  width: 180px;
  overflow: hidden;
  .el-menu {
    border-right: none;
    .el-menu-item,
    .el-submenu {
      text-align: left;
    }
  }
}
</style>
