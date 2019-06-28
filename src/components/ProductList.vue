<template>
  <div class="list">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <ListItem :data="item" @openProductDetails="openProductDetails" @remove="removeItem" />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "List",
  data: {
    selectedProduct: Object
  },
  data() {
    return {
      items: [
        { name: "one", id: "1" },
        { name: "two", id: "2" },
        { name: "three", id: "3" }
      ]
    };
  },
  components: {
      ListItem
  },
  methods: {
    openProductDetails(value) {
      if(value) {
        this.$emit('openProductDetails', value);
        // this.selectedProduct = value;
      }
    },
    removeItem(value) {
      if (value) {
        this.items = this.items.filter(item => item.id !== value);
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
