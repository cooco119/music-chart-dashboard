<template>
  <div>
    <md-toolbar>
      <h3 class="md-title">뮤직차트 모음집</h3>
      <md-button @click="this.$router.push('/melon')">멜론 순위 변화</md-button>
      <md-button @click="this.$router.push('/bugs')">벅스 순위 변화</md-button>
      <md-button @click="this.$router.push('/naver')">네이버 순위 변화</md-button>
      <md-button @click="this.$router.push('/genie')">지니 순위 변화</md-button>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
export default {
  name: "Navigation"
};
</script>
