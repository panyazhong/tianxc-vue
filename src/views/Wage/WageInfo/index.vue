<template>
  <div>
    <page-title></page-title>

    <!-- <div class="wage" v-for="item in 10" :key="item"> -->
    <title-info
      @searchWage="getWage"
      @download2Excel="download2Excel"
    ></title-info>
    <wage-info :wage="wage" ref="wageTable" :title="title"></wage-info>
    <!-- <div>
        <wage-info :wage="wage"></wage-info>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle';
import titleInfo from './components/titleInfo';
import wageInfo from './components/wageInfo';

//api
import { getWageInfo } from '@/api/wage';

export default {
  data() {
    return {
      wage: [],
      title: [],
    };
  },
  components: {
    pageTitle,
    titleInfo,
    wageInfo,
  },
  created() {
    this.getWage();
  },
  methods: {
    async getWage(params) {
      try {
        let { data } = await getWageInfo(params);
        let title = data[0].title;
        this.title = ['月份'].concat(title);

        this.wage = data.map((item) => {
          let data = {
            月份: item.wageMonth,
          };
          title.forEach((tit, index) => {
            if (tit == '渠道编码') {
              data[tit] = item.channelCode;
            } else {
              data[tit] = item.wage[index - 1];
            }
          });
          return data;
        });
      } catch (error) {}
    },
    download2Excel() {
      this.$refs.wageTable.download();
    },
  },
};
</script>

<style lang="scss" scoped>
.wage {
  width: 350px;
  margin: 20px auto;
  border: 1px solid rgb(160, 207, 255);
  border-radius: 2px;
}
</style>
