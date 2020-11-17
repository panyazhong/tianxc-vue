<template>
  <div class="">
    <h3>敬请期待...</h3>
    <!-- <div class="video-list">
      <div v-for="item in num" :key="item" class="video-item">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <div class="video-box">
            <video
              controls
              src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            ></video>
          </div>

          <div style="padding: 14px;">
            <span class="name">好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ timeFormat(currentDate) }}</time>
              <el-button type="text" class="button">管理员</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import { timeFormat } from '@/utils/time'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      timeFormat: timeFormat,
      currentDate: new Date().getTime()
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
    num() {
      return this.device === 'mobile' ? 1 : this.device === 'pad' ? 2 : 4
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
h3 {
  color: #273646;
}
.video-list {
  display: flex;
  justify-content: space-around;
  .video-item {
    width: 300px;
    .video-box {
      position: relative;
      width: 100%;
      padding-bottom: 75%;
    }
    video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #070707;
    }
  }
  .name {
    font-size: 14px;
    font-weight: bold;
    color: #273646;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .time {
      font-size: 13px;
      color: #999;
    }
  }
}
</style>
