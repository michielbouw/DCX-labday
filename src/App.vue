<template>
  <div id="app">

  <div id="mainWidget">
      <div class="list">
        <SearchBar/>
        <FoodDatabase />
      </div>

      <div class="summary">
        <Summary/>
      </div>
    </div>

    <div id="detailWidget">
      <div class="detail">
        <h1>Hier komt de detail</h1>
      </div>
    </div>

    <Main msg="Amazing Environment"/>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SearchBar from './components/SearchBar.vue'
import FoodDatabase from './components/FoodDatabase.vue'
import Summary from './components/Summary.vue'

export default {
  name: 'app',
  components: {
    Header,
    SearchBar,
    FoodDatabase,
    Summary
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
  margin: 30px 60px;
}

.list {
  border: solid blue;
}

.summary {
  border: solid red;
}

.detail {
  border: solid green;
}

@media (min-width: 768px) {
  #app {
  display: flex;
}

  #mainWidget {
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  #detailWidget {
    display: flex;
    flex-direction: column;
    width: 40%;
  }
}
</style>
