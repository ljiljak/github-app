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
import debounce from 'lodash/debounce'



  export default{

    components: {
    AppToolbar,
    AppSearch
    },

    data() {
      return {
        query: '',
        repos: []
      };
    },

    methods: {
    getRepos: debounce(function () {
      gitHub.getRepos(this.query)
        .then(response => {
          this.repos = response.data
          //console.log(response)
        })
      }, 500)
    },

    watch: {
      query() {
        this.getRepos()
      }
    }

    


  };
</script>
