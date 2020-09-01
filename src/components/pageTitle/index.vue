<template>
  <div class="">
    <div class="page-title" v-if="pageTitle">
      <span>{{ pageTitle }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.page-title {
  padding: 4px 10px;
  border-left: 5px solid #4c5e73;
  margin-bottom: 10px;
}
</style>
