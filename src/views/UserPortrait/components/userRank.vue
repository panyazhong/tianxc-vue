<template>
  <div class="user-rank">
    <title-tip title="用户活跃排行"></title-tip>

    <el-table height="300px">
      <el-table-column label="用户"></el-table-column>
      <el-table-column label="在线时长"></el-table-column>
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
  border: 1px solid #444;
}
</style>
