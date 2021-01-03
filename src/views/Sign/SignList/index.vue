<template>
  <div class="">
    <page-title></page-title>
    <filter-table @search-name="searchName"></filter-table>
    <el-divider></el-divider>
    <sign-list :list="list" @delete-sign="deleteSign"></sign-list>
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
        {
            _id: 2131231,
            name: 'dapan',
            sign_url:
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          },
      ]
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
      } catch (error) {

      }
    },

    searchName(name) {
      console.log(name)
      const params = {
        name
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
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
