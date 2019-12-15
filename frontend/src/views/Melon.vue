<template>
  <div class="home">
    <DiffTable :platformProp="'melon'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DiffTable from "@/components/DiffTable.vue";

export default {
  name: "Melon",
  components: {
    DiffTable
  }
};
</script>
