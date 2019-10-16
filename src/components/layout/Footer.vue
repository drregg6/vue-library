<template>
  <footer>
    &copy; <a href="https://www.github.com/drregg6" target="_blink">Dave Regg</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  footer {
    background: #3f3f3f;
    color: #fff;
    text-align: center;
    padding: 2rem 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    text-decoration: underline;
  }
</style>