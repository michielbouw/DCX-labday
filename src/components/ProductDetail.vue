<template>
  <div class="product-detail">
    <h1>{{product.naam}}</h1>
    <h2>Nutritional values</h2>
    <p><label>Salt</label> 
    {{product.zout}} grams</p>
    <p><label>Sugar</label> 
    {{product.suiker}} grams</p>
    <p><label>Fat</label> 
    {{product.vet}} grams</p>

    <h2>Emission</h2>
    <p><label>CO2 emissions during production</label> 
    {{product.CO2}} grams</p>

    <h2>Characteristics</h2>
    <p><label>Vega</label> 
    {{product.vega? 'Yes': 'No'}}</p>
    <p><label>Vegan</label> 
    {{product.vegan? 'Yes': 'No'}}</p>
    <p><label>Gluten free</label> 
    {{product.glutenvrij? 'Yes': 'No'}}</p>
    <p><label>Lactose free</label> 
    {{product.lactosevrij? 'Yes': 'No'}}</p>

    <h2>Waste seperation</h2>
    <p><label>Green waste</label> 
    {{product.afval.GFT? 'Yes': 'No'}}</p>
    <p><label>Paper</label> 
    {{product.afval.oudPapier? 'Yes': 'No'}}</p>
    <p><label>Glass</label> 
    {{product.afval.glas? 'Yes': 'No'}}</p>
    <p><label>Plastic</label> 
    {{product.afval.plastic? 'Yes': 'No'}}</p>
    <p><label>Residual waste</label> 
    {{product.afval.rest? 'Yes': 'No'}}</p>
  </div>
</template>


<script src="./ProductDetail.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
