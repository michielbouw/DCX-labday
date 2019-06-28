<template>
  <div class="list-item">
    <div class="rating">10</div>
    <div class="title"><h3>{{ data.name }}</h3></div>
    <div class="remove" v-on:click="removeItem">x</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    data: Object
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    removeItem() {
      this.$emit('remove');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
}
.title {

}
.remove:hover {
  cursor: pointer;
}
</style>
