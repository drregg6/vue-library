<template>
  <div class="book" v-bind:class="{'is-read':book.isRead}">
    <h1>{{ book.title }}</h1>
    <p class="author">{{ book.author }}</p>
    <p class="pages">pg. {{ book.pages }}</p>
    <div class="delete">
      x
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Book",
  props: ["book"],
  methods: {
    ...mapActions(["deleteBook"])
  }
}
</script>

<style scoped>
  .book {
    display: flex;

    padding: 1rem;
  }

  h1 {
    font-weight: bold;
    flex: 5;
  }
  .author {
    flex: 3;
  }
  .pages {
    flex: 3;
  }
  .delete {
    flex: 1;

    color: red;
    cursor: pointer;
  }

  .is-read {
    background: yellow;
  }

  @media (max-width: 500px) {
    .book {
      font-size: .8rem;

      align-items: center;
    }
  }
</style>