<template>
  <div class="list">
    My list:
    <b-list-group>
      <b-list-group-item v-for="item in listOfProducts" v-bind:key="item.id">
        <ListItem :data="item" @openProductDetails="openProductDetails" @remove="removeItem" />
      </b-list-group-item>
    </b-list-group>
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
  props: {
    listOfProducts: Array
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
        this.listOfProducts = this.listOfProducts.filter(item => item.id !== value);
      }
    }
  }
};
</script>

<style scoped>
.list {
  margin-top: 32px;
}
</style>
