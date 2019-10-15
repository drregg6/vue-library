<template>
  <div class="add-book">
    <form v-on:submit="newBook">
      <input type="text" v-model="title" placeholder="Title" />
      <input type="text" v-model="author" placeholder="Author" />
      <input type="text" v-model="pages" placeholder="Page Count" />
      <input type="submit" value="Add Book" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import uuid from 'uuid';

export default {
  name: "AddBook",
  data() {
    return {
      title: '',
      author: '',
      pages: ''
    }
  },
  methods: {
    ...mapActions(["addBook"]),
    newBook(event) {
      event.preventDefault();
      const book = {
        title: this.title,
        author: this.author,
        pages: this.pages,
        isRead: false,
        id: uuid.v4()
      }

      // Send to library.js
      this.addBook(book);

      this.title = '';
      this.author = '';
      this.pages = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 4;
    outline: 0;
    padding: 5px;

    border: 1px solid black;
  }
  input[type="submit"] {
    flex: 2;
    background: #3a3a3a;
    color: #fff;

    border: 1px solid black;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background: #a3a3a3;
  }
</style>