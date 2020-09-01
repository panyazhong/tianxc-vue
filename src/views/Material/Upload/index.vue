<template>
  <div>
    <page-title></page-title>
    <div class="upload">
      <el-upload
        drag
        action=""
        multiple
        ref="upload"
        :file-list="fileList"
        :auto-upload="false"
        :on-change="checkFile"
        :http-request="httpRequest"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          <span class="tips">tips:</span> 只能上传excel文件
        </div>
      </el-upload>

      <el-button type="primary" size="mini" @click="handleUpload"
        >点击上传</el-button
      >
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';
import { upload } from '@/api/upload';
import pageTitle from '@/components/pageTitle';
import { resolve } from 'url';
export default {
  data() {
    return {
      file: null,
      fileList: [],
      fileTypeList: [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
    };
  },
  components: {
    pageTitle,
  },
  methods: {
    // readFileasJSON
    readFileAsJson(file) {
      return new Promise((resolve, reject) => {
        try {
          const fileReader = new FileReader();
          fileReader.readAsBinaryString(file);
          fileReader.onload = (e) => {
            const data = e.target.result;

            const excel = XLSX.read(data, {
              type: 'binary',
            });

            const sheetName = excel.SheetNames[0];

            const excelJSON = XLSX.utils.sheet_to_json(excel.Sheets[sheetName]);

            resolve(excelJSON);
          };
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    },
    // 重写上传文件方法
    async httpRequest(params) {
      const { file } = params;

      const excelJSON = await this.readFileAsJson(file);

      const excelTitles = Object.keys(excelJSON[0]);

      const fd = new FormData();
      fd.append('file', file);
      fd.append('upload_excel_titles', JSON.stringify(excelTitles));
      fd.append('upload_excel_content', JSON.stringify(excelJSON));

      const res = await upload(fd);
    },
    checkFile(file) {
      const { raw } = file,
        { type } = raw;

      if (!this.fileTypeList.includes(type)) {
        this.$message({
          message: '请上传excel表格',
          type: 'warning',
          duration: 3000,
        });
        this.fileList = [];
        return;
      }
      this.fileList = [];
      this.fileList.push(file);
    },
    handleUpload() {
      this.$refs.upload.submit();
    },
  },
};
</script>

<style scoped lang="scss">
.upload {
  width: 360px;
  margin: 20px auto;
  .tips {
    color: #f56c6c;
  }
  .el-button {
    width: 360px;
    margin-top: 20px;
  }
}
</style>
