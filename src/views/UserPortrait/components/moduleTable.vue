<template>
  <div class="module-table">
    <title-tip title="模块信息"></title-tip>

    <el-table height="300px" :data="data">
      <el-table-column label="模块名" prop="moduleName">
        <template slot-scope="scope">
          {{ moduleName[scope.row.moduleName] }}
        </template>
      </el-table-column>
      <el-table-column label="模块访问量" prop="visitNum"></el-table-column>
      <el-table-column label="模块访问人数" prop="visitUsers"></el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import TitleTip from './title.vue'
import MODULE_NAME from '@/utils/define/module.js'
export default {
  data() {
    return {
      moduleName: MODULE_NAME
    }
  },
  props: {
    data: {
      default() {
        return []
      }
    }
  },
  components: {
    TitleTip
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.module-table {
  padding: 0px 10px;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #efefef;
}
</style>
