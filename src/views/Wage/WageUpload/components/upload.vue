<template>
  <div class="">
    <upload-filter @choose-filter="setTime"></upload-filter>
    <el-upload
      drag
      action=""
      ref="upload"
      class="upload"
      :file-list="fileList"
      :auto-upload="false"
      :on-change="fileChange"
      :http-request="httpRequest"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button type="primary" @click="handleUpload" size="mini">确认</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { uploadWage } from '@/api/wage'
import uploadFilter from './filter'
export default {
  data() {
    return {
      file: '',
      fileList: [],
      time: ''
    }
  },
  components: {
    uploadFilter
  },
  props: {
  },
  watch: {
    fileType() {
      this.fileList = []
    }
  },
  methods: {
    // 重写上传文件方法
    async httpRequest(params) {
      const fd = new FormData()
      fd.append('file', params.file)
      fd.append('time', this.time)
      try {
        await uploadWage(fd)
        this.$message({
          message: '上传成功',
          type: 'success'
        })
        this.fileList = []
      } catch (error) {}
    },
    fileChange(file) {
      this.fileList = []
      this.fileList.push(file)
    },
    handleUpload() {
      if (!this.time) {
        this.$message({
          message: "请选择月份",
          type: 'warning'
        })
        return
      }
      this.$refs.upload.submit();
    },
    setTime(params) {
      this.time = params.time
    }
  }
}
</script>

<style scoped lang="scss">
.upload {
  text-align: center;
  .el-button {
    width: 360px;
    margin-top: 10px;
  }
}
</style>
