<template>
  <div class="">
    <el-table :data="tableData" border size="mini">
      <el-table-column label="年份" prop="year"></el-table-column>
      <el-table-column label="上传时间">
        <template slot-scope="scope">
          <span>{{ timeFormat(scope.row.upload_time) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="上传用户" prop="uploador">
        <template slot-scope="scope">
          <span>{{ scope.row.uploador.realname }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片预览">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            fit="contain"
            :src="scope.row.url"
            :preview-src-list="[scope.row.url]"
          >
          </el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import { timeFormat } from '@/utils/time'
export default {
  data() {
    return {
      timeFormat: timeFormat,
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
