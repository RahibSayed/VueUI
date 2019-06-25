<template>
    <div>
        <h1>Executions</h1>
        <div>
            <template>
                <json-view class="text-left"
                           :data="executions" />
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
                'executions'
            ])
    }
  }
</script>