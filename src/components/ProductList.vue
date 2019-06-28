<template>
  <div class="list">
    <b>My list:</b>
    <br />
    <span v-if="!(listOfProducts && listOfProducts.length)">nothing added to your list, go ahead and add something!</span>
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
