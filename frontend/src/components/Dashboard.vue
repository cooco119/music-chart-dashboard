<template>
  <div class="dashboard" id="dashboard">
    <h1>{{ msg }}</h1>
    <div v-if="loaded">
      <v-container style="max-width: 100%">
        <v-row dense style="width: 100%;">
          <v-col>
            <v-card>
              <div>
                <v-card-title>멜론 실시간 차트</v-card-title>
                <v-card-text>
                  <div>{{ fetchDate }}</div>
                </v-card-text>
                <v-simple-table height="600px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>순위</th>
                        <th>타이틀</th>
                        <th>아티스트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="elem in loadedData.melonData.data" :key="`melon_${elem.name}_${elem.artist}`">
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
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <div>
                <v-card-title>벅스 실시간 차트</v-card-title>
                <v-card-text>
                  <div>{{ fetchDate }}</div>
                </v-card-text>
                <v-simple-table height="600px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>순위</th>
                        <th>타이틀</th>
                        <th>아티스트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="elem in loadedData.bugsData.data" :key="`bugs_${elem.name}_${elem.artist}`">
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
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <div>
                <v-card-title>네이버 실시간 차트</v-card-title>
                <v-card-text>
                  <div>{{ fetchDate }}</div>
                </v-card-text>
                <v-simple-table height="600px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>순위</th>
                        <th>타이틀</th>
                        <th>아티스트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="elem in loadedData.naverData.data" :key="`naver_${elem.name}_${elem.artist}`">
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
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <div>
                <v-card-title>지니 실시간 차트</v-card-title>
                <v-card-text>
                  <div>{{ fetchDate }}</div>
                </v-card-text>
                <v-simple-table height="600px">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>순위</th>
                        <th>타이틀</th>
                        <th>아티스트</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="elem in loadedData.genieData.data" :key="`genie_${elem.name}_${elem.artist}`">
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
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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
    loaded: false,
    windowHeight: 0,
    dashboardHeight: 0,
  }),
  computed: {
    loadedData() {
      return this.$store.state.allRecent.data;
    },
    fetchDate() {
      return (new Date(this.$store.state.allRecent.time)).toLocaleString();
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight;
        this.dashboardHeight = document.getElementById('dashboard').clientHeight;
        console.log(this.windowHeight);
      });
    })
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
img {
  max-width: 30px;
  max-height: 30px;
}
</style>
