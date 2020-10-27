<template>
  <div class="">
    <el-table :data="tableData" border style="width: 100%" size="mini">
      <el-table-column prop="upload_time" label="上传日期">
        <template slot-scope="scope">
          {{ timeFormat(scope.row.upload_time, '{y}-{m}-{d} {h}:{i}:{s}') }}
        </template>
      </el-table-column>
      <el-table-column prop="upload_name" label="文件名"> </el-table-column>
      <el-table-column label="上传用户">
        <template slot-scope="scope">
          {{ scope.row.upload_user.account }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button type="text" size="mini">
            <a download :href="scope.row.upload_url" class="download-btn"
              >下载</a
            >
          </el-button>

          <el-button
            type="text"
            size="mini"
            @click="handleGetContent(scope.row._id)"
          >
            查看
          </el-button>

          <el-button
            type="text"
            size="mini"
            v-if="user.role === 'admin'"
            @click="handleDelContent(scope.row._id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import { timeFormat } from "@/utils/time"
import { mapGetters } from 'vuex'

import { delExcelContent } from '@/api/download'
export default {
  data() {
    return {
      timeFormat: timeFormat
    }
  },
  props: {
    tableData: {
      required: true,
      default: () => {
        return []
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    handleGetContent(_id) {
      this.$emit('handle-get-content', _id)
    },
    async handleDelContent(_id) {
      await this.$confirm('确定删除该内容？', '提示', {
        type: 'warning'
      })

      await delExcelContent(_id)

      this.$emit('refresh-list')
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: #409eff;
}
</style>
