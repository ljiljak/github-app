<template>
  
 <v-ons-card>
      <img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" style="width: 100%">
      
      <div class="content">
        There are no {{plural}} here
      </div>
    </v-ons-card>

</template>

<script>
import pluralize from 'pluralize'

 export default {
    props: {
        type: String,
      },

    computed: {
      plural() {
        return pluralize(this.type)
      }
    }

  }

</script> 