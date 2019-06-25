<template>
    <div>
        <h1>Volumes</h1>
        <div>
            <template>
                <json-view class="text-left"
                           :data="volumes" />
            </template>
        </div>
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
            ...mapState([
                'volumes'
            ])
    }
  }
</script>