<template>
  <div class="">
    <el-dialog
      title="详情"
      :visible="visible"
      :before-close="close"
      width="90%"
    >
      <h3>{{ dialogContent.upload_name }}</h3>
      <el-table
        :data="dialogContent.upload_excel_content"
        size="mini"
        border
        max-height="500"
      >
        <el-table-column
          v-for="(item, key) in dialogContent.upload_excel_titles"
          :key="key"
          :label="item"
          :prop="item"
        >
          <template slot-scope="scope">
            {{ scope.row[item] }}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    dialogContent: {}
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
