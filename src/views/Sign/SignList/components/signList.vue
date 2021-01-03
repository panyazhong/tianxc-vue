<template>
  <div>
    <el-card
      :body-style="{ padding: '0px' }"
      v-for="item in list"
      :key="item._id"
      class="clearfix"
    >
      <el-image
        :src="item.sign_url"
        class="image"
        :preview-src-list="srcList"
      ></el-image>
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="name">{{ item.name }}</time>
          <el-button type="text" class="button" @click="deleteSign(item._id)"
            >删除</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: 'dapan',
      srcList: [
        'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      ],
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteSign(_id) {
      this.$emit('delete-sign', _id);
    },
  },
};
</script>

<style>
.el-card {
  width: 200px;
  float: left;
  margin: 10px;
}
.name {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
