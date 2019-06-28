<template>
  <main-layout>
    <SearchBar />
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    MainLayout,
    SearchBar
  }
}
</script>

<style>
</style>
