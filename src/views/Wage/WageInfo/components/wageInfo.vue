<template>
  <div>
    <el-table :data="wage" size="mini" border ref="table">
      <el-table-column
        :label="item"
        :key="index"
        v-for="(item, index) in title"
        :prop="item"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import mixins from '../mixins/mixin';
import XLSX from 'xlsx';
export default {
  data() {
    return {
      spanArr: [],
      pos: 0,
    };
  },
  mixins: [mixins],
  props: {
    wage: {
      default() {
        return [];
      },
    },
    title: {
      default() {
        return [];
      },
    },
  },
  watch: {
    wage: {
      deep: true,
      handler(val) {
        this.getSpanArr(val);
      },
    },
  },
  methods: {
    getSpanArr(data) {
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr.push(1);
          this.pos = 0;
        } else {
          if (data[i - 1].月份 === data[i].月份) {
            this.spanArr[this.pos]++;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.pos = i;
          }
        }
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if ([0].includes(columnIndex)) {
        const _row = this.spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col,
        };
      }
    },
    download() {
      const wb = new XLSX.utils.book_new();
      const table0 = document.getElementsByTagName('table')[0];
      const thead = table0.getElementsByTagName('thead')[0];
      const table1 = document.getElementsByTagName('table')[1];
      const tbody = table1.getElementsByTagName('tbody')[0];
      table1.insertBefore(thead, tbody);

      const ws = XLSX.utils.table_to_sheet(table1);

      XLSX.utils.book_append_sheet(wb, ws);

      XLSX.writeFile(wb, 'demo.xlsx');
    },
  },
};
</script>

<style lang="scss" scoped>
.wage-info {
  width: 350px;
  height: 40px;
  padding: 0px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #666;
  border-top: 1px solid rgb(235, 245, 255);
}
</style>
