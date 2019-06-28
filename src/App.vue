<template>
  <div id="app">
    <Header />
    <FoodDatabase />
    <SearchBar />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import FoodDatabase from './components/FoodDatabase.vue'

export default {
  name: 'app',
  components: {
    Header,
    SearchBar,
    FoodDatabase
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
