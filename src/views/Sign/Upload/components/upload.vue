<template>
  <div class="">
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
import { upload } from '@/api/sign'
export default {
  data() {
    return {
      file: '',
      fileList: [],
    }
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
      await upload(fd)
      this.fileList = []
    },
    fileChange(file) {
      this.fileList = []
      this.fileList.push(file)
    },
    handleUpload() {
      this.$refs.upload.submit();
    },
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
