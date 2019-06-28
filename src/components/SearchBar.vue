<template>
  <div class="search-bar">
    <autocomplete
      class="input-group"
      inputClass="form-control"
      :search="search"
      placeholder="Find a product"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    ></autocomplete>
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
          this.food.push({
            ...doc.data(),
            id: doc.id,
          });
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
      this.$emit('addItem', result);
    },
    getResultValue(result) {
      return result.name;
    }
  }
};
</script>

<style>
.search-bar .autocomplete {
  width: 100%;
}
</style>
