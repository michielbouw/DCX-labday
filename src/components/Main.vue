<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-for="item in food">
      {{ item.name }}
    </p>
    <hr />
    Add new:
    <form @submit="addLocation(name)">
      <input v-model="name" placeholder="Food Name">
      <button type="submit">Add</button>
    </form>
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
            name: doc.data().name
          });
        });
      });
  },
  methods: {
    addFood (name, image) {
      const createdAt = new Date()
      db.collection('food').add({ name, createdAt })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
