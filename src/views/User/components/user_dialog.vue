<template>
  <div>
    <el-dialog title="新增用户" :visible="visible">
      <el-form
        label-position="left"
        label-width="80px"
        :before-close="close"
        size="mini"
        ref="form"
        :model="userForm"
        :rules="rules"
      >
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="userForm.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input type="text" v-model="userForm.realname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="text" v-model="userForm.password"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="userForm.role">
            <el-option
              v-for="role in roles"
              :label="role.role_name"
              :value="role._id"
              :key="role._id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit">确认</el-button>
          <el-button type="default" @click="close">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { register, getRoles } from '@/api/user'
export default {
  data() {
    return {
      visible: false,
      roles: [],
      userForm: {
        username: '',
        realname: '',
        password: '',
        role: '',
      },
      rules: {
        username: [{ required: true, message: '请填写账号', trigger: 'blur' }],
        realname: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }],
        role: [{ required: true, message: '请选择角色', trigger: 'change' }],
      },
    }
  },
  created() {
    this.getRoles()
  },
  watch: {
    visible(val) {
      if (val) {
        this.getRoles()
      }
    },
  },
  methods: {
    async getRoles() {
      const { data } = await getRoles()

      this.roles = data
    },
    async submit() {
      try {
        console.log(this.userForm)
        await this.$refs.form.validateField()

        await register(this.userForm)
        this.$refs.form.resetFields()
        this.close()
        this.$emit('get-user-list')
      } catch (error) {}
    },
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-form {
  width: 300px;
  margin: 10px auto;
  .el-input {
    width: 220px !important;
  }
}
</style>
