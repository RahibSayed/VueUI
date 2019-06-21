<template>
    <div>
        <h1>Cats</h1>
        <div>
            <b-table striped hover :items="cats"></b-table>
        </div>
        <div class="text-center my-3">
            <b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-button>
        </div>
    </div>
    
</template>

<script>
import cats from '@/data/Cats'
  export default {
    data() {
      return {
        cats
      }
    }
  }
</script>