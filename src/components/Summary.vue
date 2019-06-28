<template>
  <div class="main">
    <span>
      <b-button type="button" pill variant="info" v-on:click="filter">CO2</b-button>
      <p v-if="(this.listOfProducts.map(item => item.CO2)).length">{{ (this.listOfProducts.map(item => item.CO2) || []).reduce((total, num) => total + num) }}  g</p>
    </span>

    <span>
      <b-button type="button" pill variant="info" v-on:click="filter">Salt</b-button>
      <p v-if="(this.listOfProducts.map(item => item.zout)).length">{{ (this.listOfProducts.map(item => item.zout) || []).reduce((total, num) => total + num) }} g</p>
    </span>

    <span>
      <b-button type="button" pill variant="info" v-on:click="filter">Sugar</b-button>
      <p v-if="(this.listOfProducts.map(item => item.suiker)).length">{{ (this.listOfProducts.map(item => item.suiker) || []).reduce((total, num) => total + num) }} g</p>
    </span>

    <span>
      <b-button type="button" pill variant="info" v-on:click="filter">Fat</b-button>
      <p v-if="(this.listOfProducts.map(item => item.vet)).length">{{ (this.listOfProducts.map(item => item.vet) || []).reduce((total, num) => total + num) }} g</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'summary-component',
  props: {
    listOfProducts: Array
  },
  data: {

  },
  methods: {
    filter: function () {
      // alert("Hello World");
    }
  }
}
</script>

<style scoped>
  .main {
    display: flex;
    flex-wrap: wrap;
  }

  span {
      margin: 1em 1em;
  }

  button {
    width: 90px;
  }

  @media (min-width: 768px) {
    .main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
</style>
