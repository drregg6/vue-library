/*

=== TODO ===

*/

<template>
  <div id="app">
    <div class="container">
      <Header />
      <AddBook />
      <Library />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AddBook from './components/AddBook';
import Library from './components/Library';
import Footer from './components/layout/Footer';

export default {
  name: "App",
  components: {
    Header,
    AddBook,
    Library,
    Footer
  }
}
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  .container {
    max-width: 1100px;
    margin: 1rem auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
