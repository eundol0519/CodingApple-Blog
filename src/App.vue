<template>
  <Navbar />
  <List />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import List from "./pages/List.vue";

export default {
  name: "App",
  components: {
    Navbar,
    List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
