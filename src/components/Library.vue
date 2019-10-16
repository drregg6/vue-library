<template>
  <div class="library">
    <Book v-bind:book="book" :key="book.id" v-for="book in getLibrary" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Book from './Book';

export default {
  name: "Library",
  computed: mapGetters(["getLibrary"]),
  components: {
    Book
  }
};
</script>

<style scoped>
  .library {
    margin: 2.5rem auto;
  }
</style>