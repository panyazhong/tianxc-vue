export default {
  filters: {
    moneyFormat(val) {
      if (!val) return 0;
      return val.toLocaleString('en-US');
    },
    formatMonth(val) {
      const date = val ? new Date(val) : new Date();

      const month = date.getMonth() + 1;

      return `${month}月`;
    },
  },
};
