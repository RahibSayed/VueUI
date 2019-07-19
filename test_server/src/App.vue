<template>
  <div id="app">
   
    <Server />
  </div>
</template>

<script>

import Server from "./components/Server.vue";
import Infoset from "./components/Infoset.vue";
import Volume from "./components/Volume.vue";
import Filters from "./components/Filter.vue";
import Action from "./components/Action.vue";
import Execution from "./components/Execution.vue";

export default {
  name: "app",
  components: {
    
    Server,
    Infoset,
    Volume,
    Execution,
    Filters,
    Action
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
