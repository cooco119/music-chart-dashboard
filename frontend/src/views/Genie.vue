<template>
  <div class="home">
    <DiffTable :platformProp="'genie'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DiffTable from "@/components/DiffTable.vue";

export default {
  name: "Genie",
  components: {
    DiffTable
  }
};
</script>
