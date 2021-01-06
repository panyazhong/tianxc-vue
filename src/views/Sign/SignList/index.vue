<template>
  <div class="">
    <page-title></page-title>
    <filter-table @search-name="searchName"></filter-table>
    <el-divider></el-divider>
    <sign-list
      :list="list"
      :pre-list="preList"
      @delete-sign="deleteSign"
    ></sign-list>
  </div>
</template>

<script type="text/ecmascript-6">
import pageTitle from '@/components/pageTitle'
import { getSignList, deleteSignById } from '@/api/sign'
import signList from './components/signList'
import filterTable from './components/filterTable'
export default {
  data() {
    return {
      list: [

      ],
      preList: []
    }
  },
  components: {
    signList,
    pageTitle,
    filterTable
  },
  created() {
    this.getSignList()
  },
  methods: {
    async getSignList(params) {
      try {
        const {data} = await getSignList(params)
        this.list = data
        this.preList = data.map(item => item.sign_url)
      } catch (error) {

      }
    },

    searchName(sign_name) {
      const params = {
        sign_name
      }
      this.getSignList(params)
    },
    async deleteSign(_id){
      const params = {
        _id
      }

      try {
        await this.$confirm('确认删除该签名吗？', 'Tips', {
          type: 'warning'
        })
        await deleteSignById(params)

        this.getSignList()
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
