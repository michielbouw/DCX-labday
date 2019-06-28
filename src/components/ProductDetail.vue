<template>
  <div class="product-detail">
    <h1>{{product.name}}</h1>
    <h3>Nutritional values</h3>
    <p><label>Salt</label>
    {{product.zout}} grams</p>
    <p><label>Sugar</label>
    {{product.suiker}} grams</p>
    <p><label>Fat</label>
    {{product.vet}} grams</p>

    <h3>Emission</h3>
    <p><label>CO2 emissions during production</label>
    {{product.CO2}} grams</p>

    <h3>Characteristics</h3>
    <p><label>Vega</label>
    {{product.vega? 'Yes': 'No'}}</p>
    <p><label>Vegan</label>
    {{product.vegan? 'Yes': 'No'}}</p>
    <p><label>Gluten free</label>
    {{product.glutenvrij? 'Yes': 'No'}}</p>
    <p><label>Lactose free</label>
    {{product.lactosevrij? 'Yes': 'No'}}</p>

    <h3>Waste seperation</h3>
    <p><label>Green waste</label>
    {{product.GFT? 'Yes': 'No'}}</p>
    <p><label>Paper</label>
    {{product.papier? 'Yes': 'No'}}</p>
    <p><label>Glass</label>
    {{product.glas? 'Yes': 'No'}}</p>
    <p><label>Plastic</label>
    {{product.plastic? 'Yes': 'No'}}</p>
    <p><label>Residual waste</label>
    {{product.rest? 'Yes': 'No'}}</p>
  </div>
</template>


<script src="./ProductDetail.js"></script>

<style scoped>
.product-detail {
  text-align: left;
  padding: 16px;
}
p {
  margin: 0;
}
p label {
  width: 50%;
}
</style>
