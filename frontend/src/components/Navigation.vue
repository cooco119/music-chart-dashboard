<template>
  <div>
    <v-toolbar>
      <h3 class="md-title" @click="goHome()">뮤직차트 모음집</h3>
      <v-spacer/>
      <v-btn text to="/melon">멜론 순위 변화</v-btn>
      <v-btn text to="/bugs">벅스 순위 변화</v-btn>
      <v-btn text to="/naver">네이버 순위 변화</v-btn>
      <v-btn text to="/genie">지니 순위 변화</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
