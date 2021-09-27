<template>
  <div class="">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-date-picker
        v-model="month"
        type="month"
        placeholder="选择月"
        size="mini"
        value-format="yyyy-MM"
      />

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { deleteWage } from '@/api/wage';
export default {
  data() {
    return {
      dialogVisible: false,
      month: '',
    };
  },
  methods: {
    handleClose() {},
    show() {
      this.dialogVisible = true;
    },
    async confirmDelete() {
      try {
        await deleteWage({
          month: this.month,
        });

        this.dialogVisible = false;

        this.$emit('deleteSuccess');
      } catch (err) {}
    },
  },
};
</script>

<style scoped lang="scss"></style>
