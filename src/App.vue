<template>
  <div id="app">

  <div id="mainWidget">
      <div class="list">
        <SearchBar/>
      </div>

      <div class="summary">
        <h1>Hier komt de samenvatting</h1>
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

.list {
  background-color: blue;
}

.summary {
  background-color: red;
}

.detail {
  background-color: green;
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
