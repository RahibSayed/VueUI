<template>
    <div>
        <h1>Filters</h1>
        <div>
            <template>
                <json-view class="text-left"
                           :data="filters" />
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
                'filters'
            ])
    }
  }
</script>