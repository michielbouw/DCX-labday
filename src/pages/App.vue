<template>
  <main-layout class="body">
    <div id="app">
      <div id="mainWidget">
        <div class="product-list">
          <SearchBar @addItem="addListItem"/>
          <ProductList @openProductDetails="openProductDetails" :listOfProducts="listOfProducts" />
        </div>

        <div class="summary">
          <Summary />
        </div>
      </div>

      <div v-if="Object.keys(selectedProduct).length > 0" id="detailWidget">
        <div class="detail">
          <ProductDetail :product="selectedProduct" />
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import SearchBar from "../components/SearchBar.vue";
import ProductDetail from "../components/ProductDetail.vue";
import Summary from "../components/Summary.vue";
import ProductList from "../components/ProductList.vue";

const product = {
  naam: "Pastasaus",
  zout: "14",
  suiker: "15",
  vet: "30",
  CO2: "50",
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
  name: "app",
  components: {
    MainLayout,
    SearchBar,
    ProductDetail,
    Summary,
    ProductList
  },
  data() {
    return {
      listOfProducts: [],
      selectedProduct: Object
    };
  },
  methods: {
    openProductDetails: function(value) {
      this.selectedProduct = value;
      
      console.log("open product", this.selectedProduct);
      // return product;
    },
    addListItem(item) {
      this.listOfProducts.push(item);
    }
  }
};
</script>

<style>

html {
  background: rgb(236, 236, 236);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
}

.product-list {
  padding: 2em;
  margin: 0em 2em 2em 0em;
  background: white;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

.summary {
  margin: 0em 2em 2em 0em;
  background: white;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

.detail {
margin: 0 2em 2em 0;
background: white;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);

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
