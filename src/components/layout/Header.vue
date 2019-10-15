<template>
  <header>
    <h1>
      Odin Library
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  header {
    text-align: center;
    margin: 0 auto 1rem auto;
    padding: 2rem 0;

    border-bottom: 5px solid red;
  }

  h1 {
    font-size: 3rem;
    letter-spacing: .2rem;
  }
</style>