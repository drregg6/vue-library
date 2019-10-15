<template>
  <div class="content">
    <div :key="book.id" v-for="book in getLibrary" class="library">
      <Book v-bind:book="book" />
    </div>
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
  .library:nth-child(even) {
    background: #f3f3f3;
  }
</style>