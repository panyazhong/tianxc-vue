<template>
  <div class="">
    <el-upload
      drag
      action=""
      multiple
      ref="upload"
      :file-list="fileList"
      :auto-upload="false"
      :on-change="checkFile"
      :http-request="httpRequest"
      :list-type="fileType === 'month' ? '' : 'picture'"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        <span class="tips">tips:</span> {{ tips[fileType] }}
      </div>
    </el-upload>
  </div>
</template>

<script type="text/ecmascript-6">
import { upload } from '@/api/upload';
import { uploadCard } from '@/api/yellowcard'
import XLSX from 'xlsx'
export default {
  data() {
    return {
      fileList: [],
      tips: {
        month: '只能上传excel文件',
        year: '只能上传图片'
      },
      fileTypeList: {
        month: [
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        ],
        year: []
      }
    }
  },
  props: {
    fileType: {
      default: 'month'
    },
    date: {}
  },
  watch: {
    fileType() {
      this.fileList = []
    }
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
      if (this.fileType === 'month') {
        await this.uploadExcel(params)
      } else {
        await this.uploadImage(params)
      }
    },
    // 上传excel
    async uploadExcel(params) {
      if (!this.checkDate()) return

      const { file } = params;

      const excelJSON = await this.readFileAsJson(file);

      const excelTitles = Object.keys(excelJSON[0]);

      const fd = new FormData();
      fd.append('file', file);
      fd.append('ststistics_month', new Date(this.date).getTime());
      fd.append('upload_excel_titles', JSON.stringify(excelTitles));
      fd.append('upload_excel_content', JSON.stringify(excelJSON));

      const res = await upload(fd);
    },
    // 上传图片
    async uploadImage(params) {
      if (!this.checkDate()) return
      const { file } = params
      let fd = new FormData()
      fd.append('file', file)
      fd.append('year', new Date(this.date).getFullYear())

      await uploadCard(fd)
    },
    //
    checkDate() {
      if (!this.date) {
        this.$message({
          message: '选择统计月份',
          type: 'warning',
          duration: 3000,
        });
        return false
      }
      return true
    },
    //
    checkFile(file) {
      const { raw } = file,
        { type } = raw;

      if (this.fileType === 'month') {
        if (!this.fileTypeList[this.fileType].includes(type)) {
          this.$message({
            message: '请上传excel表格',
            type: 'warning',
            duration: 3000,
          });
          this.fileList = [];
          return;
        }
      }

      this.fileList = [];
      this.fileList.push(file);
    },
    handleUpload() {
      this.$refs.upload.submit();
    },
  }
}
</script>

<style scoped lang="scss"></style>
