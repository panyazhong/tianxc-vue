<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      action=""
      multiple
      ref="upload"
      :auto-upload="false"
      :http-request="httpRequest"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>

    <el-button @click="handleUpload">点击上传</el-button>
  </div>
</template>

<script>
import { upload } from '@/api/upload'
export default {
  data() {
    return {
      file: null,
    }
  },
  methods: {
    // 重写上传文件方法
    async httpRequest(params) {
      const file = params
      const fd = new FormData()
      fd.append('file', file)

      const res = await upload(fd)
      console.log(res)
    },
    handleUpload() {
      this.$refs.upload.submit()
    },
  },
}
</script>

<style></style>
