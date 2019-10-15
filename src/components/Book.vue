<template>
  <div class="book">
    <h1>{{ book.title }}</h1>
    <p class="author">{{ book.author }}</p>
    <p class="pages">pg. {{ book.pages }}</p>
    <div class="buttons">
      <span class="read" v-bind:class="{'is-read':book.isRead}" v-on:click="onClick(book)">
      </span>
      <span class="delete">
        X
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Book",
  props: ["book"],
  methods: {
    ...mapActions(["deleteBook", "updateBook"]),
    onClick(book) {
      const updatedBook = {
        title: book.title,
        author: book.author,
        id: book.id,
        isRead: !book.isRead,
        pages: book.pages
      };

      this.updateBook(updatedBook);
    }
  }
}
</script>

<style scoped>
  .book {
    display: flex;
    align-items: center;

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
  .buttons {
    flex: 1;

    display: flex;
    align-items: center;
  }

  .delete {
    text-align: center;
    height: 25px;
    width: 25px;
    padding: 0;
    margin-left: 5px;

    color: red;
    background: white;
    border: 1px solid red;
    cursor: pointer;
    border-radius: 50%;
  }
  .delete:hover {
    background: red;
    color: white;
  }
  .read {
    height: 25px;
    width: 25px;
    margin-right: 5px;
    border-radius: 50%;
    border: 2.5px solid green;
    background: none;
    cursor: pointer;
  }

  .is-read {
    background: green;
  }

  @media (max-width: 500px) {
    .book {
      font-size: .8rem;
      flex-wrap: wrap;
    }
    h1 {
      flex-basis: 100%;
      text-align: center;
      margin-bottom: .5rem;
    }
  }
</style>