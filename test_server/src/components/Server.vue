<template>
  <div class="container">
    <div v-show="selectedServerFlag" class="output">
      <h2>{{selectedServer.name}}</h2>

      <div class="card">
        <div class="card-body">
          <div
            v-for="(value,name) in selectedServer.storage_summary"
            :key="value.id"
          >{{ name }}: {{ value }}</div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">ip</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ip</td>
                <td>Data objects (total)</td>
                <td>Data size (GB)</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>{{selectedServer.ip}}</td>
                <td>{{selectedServer.data_objects_under_management}}</td>
                <td>{{selectedServer.data_size_under_management}}</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>last</td>
                <td>data objects</td>
                <td>Applications running</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>{{selectedServer.ip}}</td>
                <td>{{selectedServer.data_objects_under_management}}</td>
                <td>{{selectedServer.application_services}}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <!-- <div v-for="(value,name) in selectedVolumes" :key="value.id">{{ name }}: {{ value }}</div> -->
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">ip</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ip</td>
                <td>Data objects (total)</td>
                <td>Data size (GB)</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <!-- <td>{{selectedVolumes.name}}</td>
                <td>{{selectedVolumes.status}}</td>
                <td>{{selectedVolumes.type}}</td>-->
              </tr>
            </tbody>
          </table>

          <div class="row">
            <div class="col-md-12">
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">Shortcuts</h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-xs-6 col-md-12">
                      <a href="#" class="btn btn-danger btn-lg" role="button">
                        <i class="fas fa-address-card"></i>
                        <br />
                        Apps [{{selectedServer.application_services}}]
                      </a>
                      <a href="#" class="btn btn-warning btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Bookmarks
                      </a>
                      <a href="#" class="btn btn-primary btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Reports
                      </a>
                      <a href="#" class="btn btn-primary btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Comments
                      </a>

                      <a href="#" class="btn btn-success btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Users
                      </a>
                      <a href="#" class="btn btn-info btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Notes
                      </a>
                      <a href="#" class="btn btn-primary btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Photos
                      </a>
                      <a href="#" class="btn btn-primary btn-lg" role="button">
                        <i class="fas fa-user"></i>
                        <br />Tags
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class>
      <h1>Servers</h1>

      <ul>
        <li v-for="serv in servers" :key="serv.id" class="list">
          {{serv.id}}
          <button v-on:click="displayId(serv.id)">Select Server</button>
        </li>
      </ul>

      <h1>Volumes</h1>
      <ul>
        <li v-for="vol in volumes" :key="vol.id" class="list">
          {{vol.id}}
          <button v-on:click="displayInfosets(vol.id)">Select Server</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      servers: [],
      volumes: [],
      infosets: [],
      selectedServer: {},
      selectedServerFlag: false,
      selectedVolumes: {},
      selectedInfosets: {}
    };
  },
  created() {
    fetch("http://localhost:8080/server.json")
      .then(response => {
        return response.json();
      })
      .then(result => (this.servers = result))
      .catch(function(error) {
        console.log(error);
      });

    fetch("http://localhost:8080/volume1.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.volumes = results))
      .catch(function(error) {
        console.log(error);
      });

    fetch("http://localhost:8080/infoset1.json")
      .then(response => {
        return response.json();
      })
      .then(result => (this.infosets = result))
      .catch(function(error) {
        console.log(error);
      });

    fetch("http://localhost:8080/filter.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.tempFilter = results))
      .catch(function(error) {
        console.log(error);
      });

    fetch("http://localhost:8080/action1.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.tempAction = results))
      .catch(function(error) {
        console.log(error);
      });
    fetch("http://localhost:8080/execution1.json")
      .then(response => {
        return response.json();
      })
      .then(results => (this.tempExecution = results))
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    displayId: function(serverid) {
      console.log("ServerID", serverid);
      this.selectedServer = this.servers.filter(
        server => server.id == serverid
      )[0];

      this.selectedVolumes = this.volumes.filter(
        vol => vol.server_id == serverid
      );

      console.log("INFOSETS", this.infosets);
      this.selectedServerFlag = true;

      //this.selectedInfosets =
      // this.selectedVolumes.map( volume => {
      //    console.log("VolumeID",volume.id)

      //    this.infosets.filter( infoset => {
      //      console.log(infoset)
      //    })
      // })

      //     //let infosetArray = []
      //     console.log("InfoSet",infoset)

      //     // if (infoset.id == volume.id) {
      //     //   infosetArray.push(infoset)
      //     // }

      //     return infoset.id == volume.id
      //   })

      // })

      console.log("SEELCTED SERVER", this.selectedServer);
      console.log("SELECTED VOLUMES", this.selectedVolumes);
    },
    displayInfosets: function(volumeid) {
      console.log("Result of Volumes: ", volumeid);
      this.selectedInfosets = this.infosets.map(infoset => {
        var datasources;
        infoset.composition === undefined
          ? (datasources = infoset.sources[0])
          : (datasources = infoset.composition.datasources[0].id);
        //var datasources = infoset.composition.datasources || {};
        //.composition.datasource.map(ds => console.log(ds)) //.id == volumeid)
        //  console.log(datasources[0]);
        return datasources;
      });

      var result = this.selectedInfosets.filter(item => {
        item == volumeid;
      });

      //returning empty array????
      console.log("Selected infoset: ", result);

      // this.selectedInfosets = this.infosets.filter(
      //   infoset => infoset.composition.datasources[0].id == volumeid
      // );
    }
  }
};
</script>

<style scoped>
.results {
  float: left;
}

.list {
  list-style-type: none;
}
</style>
