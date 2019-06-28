<template>
  <div class="list">
    <ul>
      <li v-for="item in listOfProducts" v-bind:key="item.id">
        <ListItem :data="item" @remove="removeItem" />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "List",
  props: {
    listOfProducts: Array
  },
  components: {
      ListItem
  },
  methods: {
    removeItem(value) {
      if (value) {
        this.listOfProducts = this.listOfProducts.filter(item => item.id !== value);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
