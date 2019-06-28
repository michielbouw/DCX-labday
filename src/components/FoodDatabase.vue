<template>
  <div>
    <hr />
    <b>Food database:</b>
    <p v-for="item in food">
      ID: {{ item.id }}, Name: {{ item.name }}, Date added: {{ item.createdAt }}
      <button class="button" @click="deleteFood(item.id)">Delete</button>
    </p>
    <hr />
    Add new:
    <input v-model="name" placeholder="Food Name">
    <button v-on:click="addFood(name)">Add</button>
    <hr />
  </div>
</template>

<script>
import { db, foodCollection } from '../firebase'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  data () {
    return {
      food: [],
      name: ''
    }
  },
  mounted() {
    foodCollection
      .orderBy('name', 'asc')
      .get()
      .then(querySnapshot => {
        const food = [];
        querySnapshot.forEach(doc => {
          this.food.push({
            key: doc.id,
            id: doc.id,
            name: doc.data().name,
            createdAt: doc.data().createdAt
          });
        });
      });
  },
  methods: {
    addFood (name) {
      const createdAt = new Date()
      foodCollection.add({ name, createdAt })
        .then(doc => {
          this.food.push({
            key: doc.id,
            id: doc.id,
            name,
            createdAt,
          });
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        })
      this.name = ''
    },
    deleteFood (id) {
      foodCollection.doc(id).delete()
        .then(() => {
          this.food = this.food.filter(item => item.id !== id);
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
