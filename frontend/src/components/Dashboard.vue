<template>
  <div class="dashboard">
    <h1>{{ msg }}</h1>
    <div v-if="loaded">
      <div>
        <h3>멜론 실시간 차트</h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>순위</th>
                <th>타이틀</th>
                <th>아티스트</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="elem" v-for="elem in data.melonData.data">
                <td md-numeric>{{ elem.rank }}</td>
                <td>
                  <img :src="elem.albumImg" />
                  {{ elem.name }}
                </td>
                <td>{{ elem.artist }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div>
        <h3>벅스 실시간 차트</h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>순위</th>
                <th>타이틀</th>
                <th>아티스트</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="elem" v-for="elem in data.bugsData.data">
                <td md-numeric>{{ elem.rank }}</td>
                <td>
                  <img :src="elem.albumImg" />
                  {{ elem.name }}
                </td>
                <td>{{ elem.artist }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div>
        <h3>네이버 실시간 차트</h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>순위</th>
                <th>타이틀</th>
                <th>아티스트</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="elem" v-for="elem in data.naverData.data">
                <td md-numeric>{{ elem.rank }}</td>
                <td>
                  <img :src="elem.albumImg" />
                  {{ elem.name }}
                </td>
                <td>{{ elem.artist }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <div>
        <h3>지니 실시간 차트</h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>순위</th>
                <th>타이틀</th>
                <th>아티스트</th>
              </tr>
            </thead>
            <tbody>
              <tr v-bind:key="elem" v-for="elem in data.genieData.data">
                <td md-numeric>{{ elem.rank }}</td>
                <td>
                  <img :src="elem.albumImg" />
                  {{ elem.name }}
                </td>
                <td>{{ elem.artist }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
    <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
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
      console.log(this.$store.state.allRecent);
      return this.$store.state.allRecent.data;
    }
  },
  mounted() {
    this.loadAll();
  },
  methods: {
    async loadAll() {
      await this.$store.dispatch("fetchRecentAll");
      this.loaded = true;
    }
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
