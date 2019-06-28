<template>
  <div id="app">
    <div id="mainWidget">
      <div class="list">
        <SearchBar/>
        <FoodDatabase/>
      </div>

      <div class="summary">
          <List/>

        <h1>Hier komt de samenvatting</h1>
      </div>
    </div>

    <div id="detailWidget">
      <div class="detail">
        <h1>Hier komt de detail</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import List from "./components/List.vue";
import FoodDatabase from "./components/FoodDatabase.vue";

export default {
  name: "app",
  components: {
    SearchBar,
    List,
    FoodDatabase
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
