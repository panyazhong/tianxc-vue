<template>
  <div class="">
    <page-title></page-title>
    <file-table :file-list="list" @refresh-data="getFiles"></file-table>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import { getFile } from '@/api/material'
import fileTable from './components/table'
export default {
  data() {
    return {
      list: []
    }
  },
  components: {
    fileTable,
    pageTitle
  },
  created() {
    this.getFiles()
  },
  methods: {
    async getFiles() {
      const {data} = await getFile()
      this.list = data
    }
  }
}
</script>

<style scoped lang="scss"></style>
