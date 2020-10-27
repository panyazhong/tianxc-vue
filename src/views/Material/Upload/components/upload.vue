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
    <!-- <input name="" id="" type="file" @change="fileChange" /> -->
    <el-button type="primary" @click="handleUpload" size="mini">确认</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import { uploadCard } from '@/api/yellowcard'
import mammoth from 'mammoth'
import { uploadFile } from '@/api/material'
export default {
  data() {
    return {
      text: '',
      file: '',
      fileList: [],
      fileTypeList: {
        month: [
          'application/msword', // doc
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ],
        year: []
      }
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
      await uploadFile(fd)
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
