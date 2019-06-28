<template>
  <main-layout>
    <b>Food database:</b>
    <p v-bind:key="key" v-for="(item, key) in food">
      ID: {{ item.id }},
      Name: {{ item.name }}
      <button class="button" @click="deleteFood(item.id)">Delete</button>
    </p>
    <hr />

    <b>Add new:</b>

    <span class="field">
      <input v-model="model.name" placeholder="Name" />
    </span>

    <span class="field">
      <input v-model="model.zout" type="number" placeholder="Salt" /> grams
    </span>

    <span class="field">
      <input v-model="model.suiker" type="number" placeholder="Sugar" /> grams
    </span>

    <span class="field">
      <input v-model="model.vet" type="number" placeholder="Fat" /> grams
    </span>

    <span class="field">
      <input v-model="model.CO2" type="number" placeholder="CO2" /> grams
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox1" v-model="model.vega">
      <label for="checkbox1">Vega</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox2" v-model="model.vegan">
      <label for="checkbox2">Vegan</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox3" v-model="model.glutenvrij">
      <label for="checkbox3">No glutes</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox4" v-model="model.lactosevrij">
      <label for="checkbox4">No lactose</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox5" v-model="model.GFT">
      <label for="checkbox5">Green waste</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox6" v-model="model.papier">
      <label for="checkbox6">Paper</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox7" v-model="model.glas">
      <label for="checkbox7">Glass</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox8" v-model="model.plastic">
      <label for="checkbox8">Plastic</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox8" v-model="model.rest">
      <label for="checkbox8">Rest waste</label>
    </span>

    <button v-on:click="addFood()">Add</button>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import { foodCollection } from '../firebase'

const defaultFoodItem = {
  name: '',
  createdAt: '',
  zout: 0,
  suiker: 0,
  vet: 0,
  CO2: 0,
  vega: false,
  vegan: false,
  glutenvrij: false,
  lactosevrij: false,
  GFT: false,
  papier: false,
  glas: false,
  plastic: false,
  rest: false
}

export default {
  name: 'foodDatabase',
  components: {
    MainLayout
  },
  props: {
    msg: String
  },
  data () {
    return {
      food: [],
      model: defaultFoodItem
    }
  },
  mounted() {
    foodCollection
      .orderBy('name', 'asc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.food.push({
            ...defaultFoodItem,
            ...doc.data(),
            key: doc.id,
            id: doc.id,
          });
        });
      });
  },
  methods: {
    addFood () {
      const createdAt = new Date()
      const { name, zout, suiker, vet, CO2, vega, vegan, glutenvrij, lactosevrij, GFT, papier, glas, plastic } = this.model
      const newItem = {
        ...defaultFoodItem,
        name,
        createdAt,
        zout,
        suiker,
        vet,
        CO2,
        vega,
        vegan,
        glutenvrij,
        lactosevrij,
        GFT,
        papier,
        glas,
        plastic
      }
      foodCollection.add(newItem)
        .then(doc => {
          this.food.push({
            ...newItem,
            key: doc.id,
            id: doc.id
          });
        })
      this.model = defaultFoodItem
    },
    deleteFood (id) {
      foodCollection.doc(id).delete()
        .then(() => {
          this.food = this.food.filter(item => item.id !== id);
        })
    },
  }
}
</script>

<style scoped>
.field {
  display: block;
  width: 100%;
}
</style>
