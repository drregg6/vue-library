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

  input {
    flex: 4;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>