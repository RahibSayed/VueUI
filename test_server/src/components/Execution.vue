<template>
  <div class="container">
    <div class="results">
      <h1>Executions</h1>
      <ul>
        <li v-for="serv in servers" :key="serv.id" class="list">{{serv.id}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      servers: ""
    };
  },
  created() {
    fetch("http://localhost:8080/execution1.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.servers = results))
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.results {
  display: block;
  float: left;
}

.list {
  list-style-type: none;
}
</style>
