<template>
  <div>
    <div>
      <!---
        TODO: implement start selector
      --->
    </div>
    <div v-if="loaded">
      <v-simple-table class="table">
        <template v-slot:default>
          <thead>
            <tr>
              <th>현재 순위</th>
              <th>타이틀</th>
              <th>아티스트</th>
              <th v-for="elem of diff" :key="elem.time">{{ calculateDiffDay(elem) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="elem in recent.data"
              :key="`naver_${elem.name}_${elem.artist}`"
            >
              <td md-numeric>{{ elem.rank }}</td>
              <td>
                <img :src="elem.albumImg" />
                {{ elem.name }}
              </td>
              <td>{{ elem.artist }}</td>
              <td v-for="diffElem of diff" :key="diffElem.time">
                {{ calculateDiffForElem(diffElem, elem) }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'diffTable',
  props: {
    platformProp: {
      default: '',
      type: String,
    }
  },
  data: () => ({
    loaded: false,
  }),
  computed: {
    platform() {
      return this.$props.platformProp;
    },
    platformString() { // TODO: move to view
      switch(this.platform) {
        case 'melon':
          return '멜론';
        case 'bugs':
          return '벅스';
        case 'naver':
          return '네이버';
        case 'genie':
          return '지니';
        default: 
          return "";
      }
    },
    fetchFunction() {
      switch(this.platform) {
        case 'melon':
          return 'fetchMelon';
        case 'bugs':
          return 'fetchBugs';
        case 'naver':
          return 'fetchNaver';
        case 'genie':
          return 'fetchGenie';
        default: 
          return "";
      }
    },
    recent() {
      return this.$store.getters[`recent/${this.platform}`];
    },
    diff() {
      const data = this.$store.getters[`diff/${this.platform}`].diff;
      if (data.length > 0) {
        console.log(data);
        return data;
      }
      return [];
    }
  },
  methods: {
    calculateDiffDay(elem) {
      const diffTime =  new Date(this.recent.time) - new Date(elem.time);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    calculateDiffForElem(diffElem, elem) {
      const target = diffElem.diff.filter(e => e.name === elem.name && e.artist === elem.artist)[0];
      if (target.diff === 0) {
        return "-";
      }
      return target.diff;
    }
  },
  async mounted() {
    await this.$store.dispatch(`recent/${this.fetchFunction}`);
    await this.$store.dispatch(`diff/${this.fetchFunction}`, { start: '2020-06-13' });
    this.loaded = true;
  }
}
</script>
<style scoped>
img {
  max-width: 30px;
  max-height: 30px;
}
.table {
  overflow-x: scroll;
}
</style>
