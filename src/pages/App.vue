<template>
  <main-layout>
    <div id="app">
      <div id="mainWidget">
        <div class="list">
          <SearchBar />
        </div>

        <div class="summary">
          <h1>Hier komt de samenvatting</h1>
        </div>
      </div>

      <div id="detailWidget">
        <div class="detail">
          <ProductDetail :product="getProductDetails()" />
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import SearchBar from '../components/SearchBar.vue'
import ProductDetail from '../components/ProductDetail.vue'

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
    MainLayout,
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
