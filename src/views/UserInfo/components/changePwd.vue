<template>
  <div class="">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      size="mini"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="原密码" prop="originPwd">
        <el-input
          type="password"
          v-model="ruleForm.originPwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPwd">
        <el-input
          type="password"
          v-model="ruleForm.checkPwd"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { changePwd } from '@/api/user'
export default {
  data() {
    var validatePwd = (rule, val, cb) => {
      if (!val) {
        cb(new Error('请填写密码'))
      } else {
        if (this.ruleForm.checkPwd) {
          this.$refs.ruleForm.validateField('checkPwd');
        }
        cb();
      }
    };

    var validateCheckPwd = (rule, val, cb) => {
      if (!val) {
        cb(new Error('请再次输入密码'));
      } else if (val !== this.ruleForm.password) {
        cb(new Error('两次输入密码不一致!'));
      } else {
        cb();
      }
    };
    return {
      rules: {
        originPwd: [{
          required: true,
          message: '请填写原密码'
        }],
        password: [{
          required: true,
          validator: validatePwd
        }],
        checkPwd: [{
          required: true,
          validator: validateCheckPwd
        }]
      },
      ruleForm: {
        originPwd: '',
        password: '',
        checkPwd: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.$refs.ruleForm.validate()
        let params = {
          originPwd: this.ruleForm.originPwd,
          password: this.ruleForm.password
        }
        await changePwd(this.ruleForm)

        await this.$confirm('修改密码成功，请重新登录', '提示')

        this.$store.dispatch('HandleLogout')
      } catch (error) {

      }
    },
    resetForm(name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.el-form {
  width: 500px;
  ::v-deep .el-form-item__label {
    font-size: 13px;
  }
}
</style>
