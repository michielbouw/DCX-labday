<template>
  <div class="list">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <ListItem :data="item" />
      </li>
    </ul>
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
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
</style>
