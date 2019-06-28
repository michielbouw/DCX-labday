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
      <input v-model="name" placeholder="Name" />
    </span>

    <span class="field">
      <input v-model="zout" type="number" placeholder="Salt" /> grams
    </span>

    <span class="field">
      <input v-model="suiker" type="number" placeholder="Sugar" /> grams
    </span>

    <span class="field">
      <input v-model="vet" type="number" placeholder="Fat" /> grams
    </span>

    <span class="field">
      <input v-model="CO2" type="number" placeholder="CO2" /> grams
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox1" v-model="vega">
      <label for="checkbox1">Vega</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox2" v-model="vegan">
      <label for="checkbox2">Vegan</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox3" v-model="glutenvrij">
      <label for="checkbox3">No glutes</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox4" v-model="lactosevrij">
      <label for="checkbox4">No lactose</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox5" v-model="GFT">
      <label for="checkbox5">Green waste</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox6" v-model="papier">
      <label for="checkbox6">Paper</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox7" v-model="glas">
      <label for="checkbox7">Glass</label>
    </span>

    <span class="field">
      <input type="checkbox" id="checkbox8" v-model="plastic">
      <label for="checkbox8">Plastic</label>
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
  plastic: false
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
      ...defaultFoodItem
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
            key: doc.id,
            id: doc.id,
            name: doc.data().name,
            createdAt: doc.data().createdAt,
          });
        });
      });
  },
  methods: {
    addFood () {
      const createdAt = new Date()
      const { name, zout, suiker, vet, CO2, vega, vegan, glutenvrij, lactosevrij, GFT, papier, glas, plastic } = this
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
      foodCollection.add({ name: this.name, createdAt })
        .then(doc => {
          this.food.push({
            ...newItem,
            key: doc.id,
            id: doc.id
          });
        })
      this.name = ''
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
