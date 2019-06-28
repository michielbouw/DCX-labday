<template>
  <div id="app">
    <Main msg="Amazing Environment"/>
    <SearchBar />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    Main,
    SearchBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
