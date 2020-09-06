<template>
  <div>
    <el-table border :data="tableData" size="mini">
      <el-table-column label="账号" prop="username"></el-table-column>
      <el-table-column label="用户名" prop="realname"></el-table-column>
      <el-table-column label="创建时间" prop="created">
        <template slot-scope="scope">
          {{ scope.row.created ? timeFormat(new Date(scope.row.created)) : '' }}
        </template>
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          {{ scope.row.role.role_name }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="delUser(scope.row._id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { timeFormat } from '@/utils/time'
export default {
  data() {
    return {
      timeFormat: timeFormat,
    }
  },
  props: {
    tableData: {},
  },
  methods: {
    async delUser(_id) {
      try {
        await this.$confirm('确定删除该用户？', '提示', { type: 'warning' })
        this.$emit('del-user', _id)
      } catch (error) {}
    },
  },
}
</script>

<style></style>
