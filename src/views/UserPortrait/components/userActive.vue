<template>
  <div class="module-table">
    <title-tip title="用户活跃度"></title-tip>
  </div>
</template>

<script type="text/ecmascript-6">
import TitleTip from './title.vue'
export default {
  data() {
    return {
    }
  },
  props: {
    data: {
      default() {
        return []
      }
    }
  },
  components: {
    TitleTip
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.module-table {
  padding: 0px 10px;
  border: 1px solid #efefef;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #efefef;
  margin-bottom: 20px;
}
</style>
