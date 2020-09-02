<template>
  <div class="">
    <el-table :data="tableData" border size="mini">
      <el-table-column label="姓名" prop="user"></el-table-column>
      <el-table-column label="黄牌数" prop="yellowCard">
        <template slot-scope="scope">
          <span
            class="card-num"
            :class="scope.row.yellowCard > 0 ? 'card' : ''"
            >{{ scope.row.yellowCard }}</span
          >
          <!-- <i
            class="el-icon-postcard"
            style="color: #f6c106"
            v-if="scope.row.yellowCard > 0"
          ></i> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
    tableData: {}
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.card-num {
  margin-right: 20px;
}
.card {
  color: #f6c106;
}
</style>
