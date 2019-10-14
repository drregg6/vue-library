<template>
  <div>
    <h3>Library</h3>
    <div class="content">
      <div
        :key="book.id"
        v-for="book in getLibrary"
        class="book"
      >
        <h3>{{ book.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Library",
  computed: mapGetters(["getLibrary"])
};
</script>

<style scoped>
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
</style>