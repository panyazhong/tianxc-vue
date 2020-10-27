<template>
  <div class="">
    <el-table :data="fileList" size="mini" border>
      <el-table-column label="文件名" prop="name"></el-table-column>
      <el-table-column label="上传时间" prop="upload_time">
        <template slot-scope="scope">
          {{ timeFormat(scope.row.upload_time) }}
        </template>
      </el-table-column>
      <el-table-column label="上传人" prop="">
        <template slot-scope="scope">
          {{ scope.row.uploador.username }}
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="">
        <template slot-scope="scope">
          <div class="ops">
            <a :href="scope.row.path" target="blank"
              ><img
                src="~@/assets/pdf.png"
                alt=""
                style="width: 50px; height: 50px"
            /></a>
            <el-button
              v-if="user.role === 'admin'"
              type="text"
              @click="deleteRow(scope.row._id)"
              style="font-size: 12px"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
import {timeFormat} from '@/utils/time'
import { deleteFile } from '@/api/material'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      timeFormat: timeFormat
    }
  },
  props: {
    fileList: {}
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async deleteRow(id) {
      try {
        await this.$confirm('确认删除该文件？', '提示', {
          type: 'warning'
        })
        const params = {
          _id: id
        }
        await deleteFile(params)

        this.$emit('refresh-data')
      } catch (error) {

      }

    }
  }
}
</script>

<style scoped lang="scss">
.ops {
  display: flex;
  align-items: center;
  button {
    margin-left: 10px;
  }
}
</style>
