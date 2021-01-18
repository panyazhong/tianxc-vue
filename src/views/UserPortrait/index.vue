<template>
  <div class="">
    <page-title></page-title>

    <div class="user-portrait">
      <user-active></user-active>

      <el-row :gutter="20">
        <el-col :lg="12" :md="24">
          <module-table :data="moduleData"></module-table>
        </el-col>
        <el-col :lg="12" :md="24">
          <user-rank></user-rank>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import moduleTable from './components/moduleTable.vue'
import userActive from './components/userActive.vue'
import userRank from './components/userRank.vue'

// api
import {getModulesInfo} from '@/api/userPortrait.js'
export default {
  data() {
    return {
      moduleData: []
    }
  },
  components: {
    pageTitle,
    moduleTable,
    userActive,
    userRank
  },
  created() {
    this.getModulesInfo()
  },
  methods: {
    async getModulesInfo() {
      let {data} = await getModulesInfo()

      let result = []
      for (let key in data) {
        result.push({
          moduleName: key,
          moduleVisitNum: data[key]
        })
      }

      this.moduleData = result
    }
  }
}
</script>

<style scoped lang="scss"></style>
