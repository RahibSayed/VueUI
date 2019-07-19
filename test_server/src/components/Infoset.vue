<template>
  <div class="container">
    <div class="results">
      <h1>Infoset</h1>
      <ul>
        <li v-for="serv in infosets" :key="serv.id" class="list">{{serv.id}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      infosets: ""
    };
  },
  created() {
    fetch("http://localhost:8080/infoset.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.infosets = results))
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
