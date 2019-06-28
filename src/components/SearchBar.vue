<template>
  <div class="search-bar">
    <autocomplete
      :search="search"
      placeholder="Search for a product"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    ></autocomplete>
    <h1>You've selected: {{selectedResult}}</h1>
  </div>
</template>

<script>
import Autocomplete from "@trevoreyre/autocomplete-vue";
import { foodCollection } from "../firebase";

export default {
  name: "SearchBar",
  data() {
    return {
      selectedResult: "",
      food: []
    };
  },
  components: {
    Autocomplete
  },
  mounted() {
    foodCollection
      .orderBy("name", "asc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.food.push(doc.data());
        });
      });

  },
  methods: {
    search(input) {
      if (input.length < 1) {
        return [];
      }
      return this.food.filter(listItem => {
        return listItem.name.toLowerCase().startsWith(input.toLowerCase());
      });
    },
    handleSubmit(result) {
      this.selectedResult = result;
    },
    getResultValue(result) {
      return result.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
