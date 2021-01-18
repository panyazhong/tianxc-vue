<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  props: {
    title: {
      default: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.title {
  line-height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 550;
}
</style>
