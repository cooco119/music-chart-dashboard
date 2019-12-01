<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <div v-if="loaded">
      <div>
        <h3>멜론 실시간 차트</h3>
        <md-table>
          <md-table-row>
            <md-table-head md-numeric>순위</md-table-head>
            <md-table-head>타이틀</md-table-head>
            <md-table-head>아티스트</md-table-head>
          </md-table-row>
          <md-table-row v-bind:key="elem" v-for="elem in data">
            <md-table-cell md-numeric>{{ elem.data.melonData.rank }}</md-table-cell>
            <md-table-cell>
              <img :src="elem.data.melonData.albumImg" />
              {{ elem.data.melonData.name }}
            </md-table-cell>
            <md-table-cell>{{ elem.data.melonData.artist }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>>
      <div>
        <h3>벅스 실시간 차트</h3>
        <md-table>
          <md-table-row>
            <md-table-head md-numeric>순위</md-table-head>
            <md-table-head>타이틀</md-table-head>
            <md-table-head>아티스트</md-table-head>
          </md-table-row>
          <md-table-row v-bind:key="elem" v-for="elem in data">
            <md-table-cell md-numeric>{{ elem.data.bugsData.rank }}</md-table-cell>
            <md-table-cell>
              <img :src="elem.data.bugsData.albumImg" />
              {{ elem.data.bugsData.name }}
            </md-table-cell>
            <md-table-cell>{{ elem.data.bugsData.artist }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>>
      <div>
        <h3>네이버 실시간 차트</h3>
        <md-table>
          <md-table-row>
            <md-table-head md-numeric>순위</md-table-head>
            <md-table-head>타이틀</md-table-head>
            <md-table-head>아티스트</md-table-head>
          </md-table-row>
          <md-table-row v-bind:key="elem" v-for="elem in data">
            <md-table-cell md-numeric>{{ elem.data.naverData.rank }}</md-table-cell>
            <md-table-cell>
              <img :src="elem.data.naverData.albumImg" />
              {{ elem.data.naverData.name }}
            </md-table-cell>
            <md-table-cell>{{ elem.data.naverData.artist }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>>
      <div>
        <h3>지니 실시간 차트</h3>
        <md-table>
          <md-table-row>
            <md-table-head md-numeric>순위</md-table-head>
            <md-table-head>타이틀</md-table-head>
            <md-table-head>아티스트</md-table-head>
          </md-table-row>
          <md-table-row v-bind:key="elem" v-for="elem in data">
            <md-table-cell md-numeric>{{ elem.data.genieData.rank }}</md-table-cell>
            <md-table-cell>
              <img :src="elem.data.genieData.albumImg" />
              {{ elem.data.genieData.name }}
            </md-table-cell>
            <md-table-cell>{{ elem.data.genieData.artist }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
    <md-progress-spinner v-if="!loaded" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
  props: {
    msg: String
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    data() {
      return this.$store.state.allRecent;
    }
  },
  mounted: async () => {
    await this.$store.dispatch("updateAll");
    this.loaded = true;
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
