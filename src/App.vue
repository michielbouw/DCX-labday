<template>
  <div id="app">
    <Main msg="Amazing Environment"/>
    <SearchBar />
    <List />
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import SearchBar from "./components/SearchBar.vue";
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    Main,
    SearchBar,
    List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
