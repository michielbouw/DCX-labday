<template>
  <div class="list-item">
    <div class="rating">{{ data.CO2 }}</div>
    <div class="title" v-on:click="openProductDetails"><h3>{{ data.name }}</h3></div>
    <div class="remove" v-on:click="removeItem">x</div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    data: Object
  },
  components: {},
  methods: {
    openProductDetails() {
      this.$emit('openProductDetails', this.data);
    },
    removeItem() {
      this.$emit('remove', this.data.key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.title {

}
.remove:hover {
  cursor: pointer;
}
</style>
