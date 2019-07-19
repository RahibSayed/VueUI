<template>
  <div class="container">
    <div class="results">
      <h1>Volume</h1>
      <ul>
        <li v-for="serv in servers" :key="serv.id" class="list">{{serv.id}} [{{serv.server_id}}]</li>
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
    fetch("http://localhost:8080/volume1.json")
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
.results {
  display: block;
  float: left;
}

<style scoped>
.list {
  list-style-type: none;
}
</style>
