<template>
  <div class="home">
    <DiffTable :platformProp="'bugs'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DiffTable from "@/components/DiffTable.vue";

export default {
  name: "Bugs",
  components: {
    DiffTable
  }
};
</script>
