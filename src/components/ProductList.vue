<template>
  <div class="list">
    My list:
    <b-list-group>
      <b-list-group-item v-for="item in items" v-bind:key="item.id">
        <ListItem :data="item" @remove="removeItem" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "List",
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
