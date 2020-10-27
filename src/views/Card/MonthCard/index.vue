<template>
  <div class="">
    <page-title></page-title>
    <download-table
      :table-data="excelList"
      @refresh-list="getExcelList"
      v-on:handle-get-content="ViewExcelContent"
    ></download-table>

    <content-dialog
      :dialogContent="dialogContent"
      ref="dialog"
    ></content-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import downloadTable from './component/download_table'
import contentDialog from './component/content_dialog'
import pageTitle from '@/components/pageTitle'
import { getExcelList, getExcelContent } from '@/api/download'
export default {
  data() {
    return {
      excelList: [],
      dialogContent: {}
    }
  },
  components: {
    downloadTable,
    contentDialog,
    pageTitle
  },
  async created() {
    this.getExcelList()
  },
  methods: {
    async getExcelList() {
      const {data} = await getExcelList()
      this.excelList = data
    },
    async ViewExcelContent(_id) {
      try {
        const {data} = await getExcelContent(_id)
        data.upload_excel_titles = data.upload_excel_titles ? JSON.parse(data.upload_excel_titles) : data.upload_excel_titles
        data.upload_excel_content = data.upload_excel_content? JSON.parse(data.upload_excel_content) : data.upload_excel_content
        this.dialogContent = data

        this.$refs.dialog.open()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
