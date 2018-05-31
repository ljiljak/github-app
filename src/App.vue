<template>
    <v-ons-page>
      <AppToolbar />
      <AppSearch
        :query.sync="query"
        placeholder="Search"
       />

    </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import { gitHub } from './services/GitHub.js'



  export default{

    components: {
    AppToolbar,
    AppSearch
    },

    data() {
      return {
        query: ''
      };
    },

    methods: {
    getRepos: function () {
      gitHub.getRepos(this.query)
        .then(response => {
          console.log(response)
        })
      }
    },

    watch: {
      query() {
        this.getRepos()
      }
    }

    


  };
</script>
