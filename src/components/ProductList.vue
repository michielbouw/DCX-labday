<template>
  <div class="list">
    <span v-if="listOfProducts.length">My list:</span>
    <span v-if="!listOfProducts.length">nothing added to your list, go ahead and add something!</span>
    <b-list-group>
      <b-list-group-item v-for="item in listOfProducts" v-bind:key="item.id">
        <ListItem :data="item" @remove="removeItem" />
      </b-list-group-item>
    </b-list-group>
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

<style scoped>
.list {
  margin-top: 32px;
}
</style>
