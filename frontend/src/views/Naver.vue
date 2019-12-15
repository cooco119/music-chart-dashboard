<template>
  <div class="home">
    <DiffTable :platformProp="'naver'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DiffTable from "@/components/DiffTable.vue";

export default {
  name: "Naver",
  components: {
    DiffTable
  }
};
</script>
