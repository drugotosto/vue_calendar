<template>
  <div id="app">
      <Planner/>
  </div>
</template>

<script>
import Planner from "./components/Planner";

export default {
  name: 'app',
  components: {
      Planner,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
