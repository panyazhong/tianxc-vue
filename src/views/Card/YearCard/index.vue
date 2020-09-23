<template>
  <div class="">
    <page-title></page-title>
    <yellow-card-table :tableData="tableData"></yellow-card-table>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import yellowCardTable from './components/yellow_card_table'
import {getYellowcardLsit} from '@/api/yellowcard'
export default {
  data() {
    return {
      tableData: []
    }
  },
  components: {
    pageTitle,
    yellowCardTable
  },
  created() {
    this.getYellowcardLsit()
  },
  methods: {
    async getYellowcardLsit() {
      const { data } = await getYellowcardLsit()
      this.tableData = data
    }
  }
}
</script>

<style scoped lang="scss"></style>
