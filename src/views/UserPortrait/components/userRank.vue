<template>
  <div class="user-rank">
    <title-tip title="用户活跃排行"></title-tip>

    <el-table height="300px" :data="data">
      <el-table-column label="用户" prop="user_name"></el-table-column>
      <el-table-column label="在线时长">
        <template slot-scope="scope">
          {{ scope.row.visit_time | dateToHMS }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import TitleTip from './title.vue'
export default {
  data() {
    return {

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
.user-rank {
  padding: 0px 10px;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #efefef;
}
</style>
