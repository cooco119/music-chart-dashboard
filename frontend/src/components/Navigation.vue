<template>
  <div>
    <v-toolbar>
      <h3 class="md-title">뮤직차트 모음집</h3>
      <v-btn to="/melon">멜론 순위 변화</v-btn>
      <v-btn to="/bugs">벅스 순위 변화</v-btn>
      <v-btn to="/naver">네이버 순위 변화</v-btn>
      <v-btn to="/genie">지니 순위 변화</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
