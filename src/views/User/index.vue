<template>
  <div>
    <page-title></page-title>

    <filter-table @search-user="getUsers" @add-user="addUser"></filter-table>
    <user-table :tableData="users" @del-user="delUser"></user-table>

    <user-dialog ref="dialog" @get-user-list="getUsers"></user-dialog>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import userTable from './components/user_table'
import filterTable from './components/filter_table'
import userDialog from './components/user_dialog'
import { getUsers, delUser } from '@/api/user'

export default {
  data() {
    return {
      users: [],
    }
  },
  components: {
    pageTitle,
    userTable,
    filterTable,
    userDialog,
  },
  created() {
    this.getUsers()
  },
  methods: {
    async getUsers(username) {
      try {
        let data
        if (username) {
          const params = {
            username,
          }

          const res = await getUsers(params)
          data = res.data
        } else {
          const res = await getUsers()
          data = res.data
        }

        this.users = data
      } catch (error) {
        console.log(error)
      }
    },
    addUser() {
      this.$refs.dialog.open()
    },
    async delUser(_id) {
      try {
        await delUser({
          user_id: _id,
        })
        this.getUsers()
      } catch (error) {}
    },
  },
}
</script>

<style></style>
