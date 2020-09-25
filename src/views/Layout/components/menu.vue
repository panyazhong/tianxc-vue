<template>
  <div class="menu-box">
    <el-menu
      :default-active="defaultKey"
      class="el-menu-vertical-demo"
      background-color="#2a3947"
      :collapse="device === 'mobile' ? true : false"
      text-color="#fff"
      active-text-color="#4699ff"
    >
      <div v-for="(route, index) in accessedRoutes" :key="route.path + index">
        <el-submenu v-if="route.path" :index="route.path">
          <template slot="title">
            <i :class="route.meta.icon"></i>
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
            <i :class="baseChild.meta.icon"></i>
            <span slot="title">{{
              baseChild.meta ? baseChild.meta.title : 'tianxc'
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
      'accessedRoutes',
      'device'
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
.mobile {
  .el-submenu {
    overflow: hidden;
    ::v-deep .el-submenu__title {
      padding: 0px 8px !important;
    }
  }
  .menu-box {
    width: 36px;
    .el-menu--collapse {
      width: 36px;
    }
    ::v-deep .el-submenu__icon-arrow {
      display: none !important;
    }
    ::v-deep .el-tooltip {
      padding-left: 8px !important;
    }
  }
}
</style>
