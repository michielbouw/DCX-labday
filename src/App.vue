<template>
  <div id="app">
    <Main msg="Amazing Environment"/>
    <SearchBar />
    <ProductDetail :product="getProductDetails()" />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import SearchBar from './components/SearchBar.vue'
import ProductDetail from './components/ProductDetail.vue'

const product = {
    naam: 'Pastasaus',
    zout: '14',
    suiker: '15',
    vet: '30',
    CO2: '50',
    vega: true,
    vegan: false,
    glutenvrij: true,
    lactosevrij: false,
    afval: {
        GFT: true,
        oudPapier: true,
        glas: true,
        plastic: true,
        rest: true
    }
};

export default {
  name: 'app',
  components: {
    Main,
    SearchBar,
    ProductDetail
  },
  methods: {
    getProductDetails: function() {
      return product;
    }
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
