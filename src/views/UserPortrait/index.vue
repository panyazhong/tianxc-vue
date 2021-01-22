<template>
  <div class="">
    <page-title></page-title>

    <div class="user-portrait">
      <!-- <user-active></user-active> -->

      <el-row :gutter="20">
        <el-col :lg="12" :md="24">
          <module-table :data="moduleData"></module-table>
        </el-col>
        <el-col :lg="12" :md="24">
          <user-rank :data="userInLineTime"></user-rank>
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
import {getModulesInfo,
  getUserInlineTime} from '@/api/userPortrait.js'
export default {
  data() {
    return {
      moduleData: [],
      userInLineTime: []
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
    this.getUserInlineTime()
  },
  methods: {
    async getModulesInfo() {
      let { data } = await getModulesInfo()

      let result = []
      for (let key in data) {
        result.push({
          moduleName: key,
          visitNum: data[key].visitNum,
          visitUsers: data[key].visitUsers
        })
      }

      result = result.sort((a, b) => {
        return b.visitNum - a.visitNum
      })
      this.moduleData = result
    },
    async getUserInlineTime() {
      let { data } = await getUserInlineTime()

      let result = []
      for (let key in data) {
        result.push({
          user_name: data[key].user_name,
          visit_time: data[key].visit_time,
        })
      }

      result = result.sort((a, b) => {
        return b.visit_time - a.visit_time
      })
      this.userInLineTime = result
    }
  }
}
</script>

<style scoped lang="scss"></style>
