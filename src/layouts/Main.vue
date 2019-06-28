<template>
  <div class="container">
    <v-link href="/">Home</v-link>
    <v-link href="/database">Database</v-link>

    <h1>Amazing Environment</h1>
    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'
  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
a {
  margin-right: 16px;
}
</style>
