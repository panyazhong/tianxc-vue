<template>
  <div>
    <page-title></page-title>
    <div class="upload">
      <filter-com @choose-filter="chooseFilter"></filter-com>
      <upload-com :file-type="file_type" :date="date" ref="upload"></upload-com>
      <el-button type="primary" size="mini" @click="handleUpload"
        >点击上传</el-button
      >
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';
import pageTitle from '@/components/pageTitle';
import filterCom from './components/filter';
import uploadCom from './components/upload';
import { resolve } from 'url';
export default {
  data() {
    return {
      ststistics_month: '',
      file_type: 'month',
      date: '',
    };
  },
  components: {
    pageTitle,
    filterCom,
    uploadCom,
  },
  methods: {
    chooseFilter(params) {
      const { type, date } = params;
      this.file_type = type;
      this.date = date;
    },
    handleUpload() {
      this.$refs.upload.handleUpload();
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
