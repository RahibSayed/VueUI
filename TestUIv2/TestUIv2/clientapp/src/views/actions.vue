<template>
    <div>
        <h1>Actions</h1>
        <v-jstree :data="actions">
  <template scope="_">
    <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl" @click.exact="customItemClick(_.vm, _.model, $event)">
    <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i>
    {{_.model.text}}
    </div>
  </template>
</v-jstree>
    </div>

</template>

<script>
import { mapState } from 'vuex'

  export default {
    data() {
      return {
      }
        },
        computed: {
            ...mapState({
                actions:'actions'
            })
    },
      methods: {
        itemClick (node) {
          console.log(node.model.text + ' clicked !')
        }
      }
  }
</script>

