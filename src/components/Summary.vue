<template>
  <div class="main">
      <span>
          <button v-on:click="filter">CO2</button>
          <p v-if="CO2"> {{ CO2 }}  g</p>
      </span>

      <span>
          <button v-on:click="filter">Salt</button>
          <p v-if="Salt"> {{Salt}} g</p>
      </span>

            <span>
          <button v-on:click="filter">Sugar</button>
          <p v-if="Sugar"> {{Sugar}}g </p>
      </span>

      <span>
          <button v-on:click="filter">Fat</button>
          <p v-if="Fat"> {{Fat}} g</p>
      </span>
</div>
</template>

<script>
export default {
  name: 'summary-component',
  data: {
    CO2: String,
    Salt: String,
    Fat: String,
    Sugar: String,
  },
  data: function () {
  return {
    CO2: 100,
    Salt: 200,
    Sugar: 300,
    Fat: 400
  }
},
  methods: {
    filter: function () {
      alert("Hello World");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    display: flex;
}

span {
    margin: 1em 1em;
}

button {
    width: 140px;
    height: 40px;
}
</style>
