<template>
  <div class="product-detail">
    <h1>{{product.naam}}</h1>
    <h2>Voedingswaarden</h2>
    <p><label>Zout</label> 
    {{product.zout}} g</p>
    <p><label>Suiker</label> 
    {{product.suiker}} g</p>
    <p><label>Vet</label> 
    {{product.vet}} g</p>

    <h2>Uitstoot</h2>
    <p><label>CO2 uitstoot bij productie</label> 
    {{product.CO2}} g</p>

    <h2>Kenmerken</h2>
    <p><label>Vega</label> 
    {{product.vega? 'Ja': 'Nee'}}</p>
    <p><label>Vegan</label> 
    {{product.vegan? 'Ja': 'Nee'}}</p>
    <p><label>Glutenvrij</label> 
    {{product.glutenvrij? 'Ja': 'Nee'}}</p>
    <p><label>Lactosevrij</label> 
    {{product.lactosevrij? 'Ja': 'Nee'}}</p>

    <h2>Afvalscheiding</h2>
    <p><label>GFT</label> 
    {{product.afval.GFT? 'Ja': 'Nee'}}</p>
    <p><label>Oud papier</label> 
    {{product.afval.oudPapier? 'Ja': 'Nee'}}</p>
    <p><label>Glas</label> 
    {{product.afval.glas? 'Ja': 'Nee'}}</p>
    <p><label>Plastic</label> 
    {{product.afval.plastic? 'Ja': 'Nee'}}</p>
    <p><label>Restafval</label> 
    {{product.afval.rest? 'Ja': 'Nee'}}</p>
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
