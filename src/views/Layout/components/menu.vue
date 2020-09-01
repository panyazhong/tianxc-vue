<template>
  <div class="menu-box">
    <el-menu
      :default-active="defaultKey"
      class="el-menu-vertical-demo"
      background-color="#2a3947"
      text-color="#fff"
      active-text-color="#4699ff"
    >
      <div v-for="route in accessedRoutes" :key="route.path">
        <el-submenu v-if="route.path" :index="route.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ route.meta.title }}</span>
          </template>
          <el-menu-item
            v-for="child in route.children"
            :key="child.path"
            :index="generatorFullPath(route.path, child.path)"
            @click="handleRoute(generatorFullPath(route.path, child.path))"
          >
            {{ child.meta.title }}
          </el-menu-item>
        </el-submenu>

        <div v-else>
          <el-menu-item
            v-for="baseChild in route.children"
            :key="baseChild.path"
            :index="baseChild.path"
            @click="handleRoute(baseChild.path)"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{
              baseChild.meta ? baseChild.meta.title : 'hhhh'
            }}</span>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    defaultKey() {
      return this.$route.path
    },
    ...mapGetters([
      'accessedRoutes'
    ])
  },
  methods: {
    generatorFullPath(basePath, path) {
      return `${basePath}/${path}`
    },
    handleRoute(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped lang="scss">
.menu-box {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0px;
  background-color: #2a3947;
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
