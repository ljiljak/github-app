<template>
    <v-ons-page>
      <AppToolbar />
      <div class="content">
      <AppSearch
        :query.sync="query"
        placeholder="Search">
     </AppSearch>

      <v-ons-list>
      <v-ons-list-header>Repositories of {{query}}</v-ons-list-header>
      <v-ons-list-item v-for="repo in repos">
        <div class="left">
          <img class="list-item__thumbnail" :src="repo.owner.avatar_url">
        </div>
        <div class="center">
          <span class="list-item__title">{{repo.name}}</span><span class="list-item__subtitle">{{repo.description}}</span>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </div>

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
          if (this.repos = !null) {
            this.repos = response.data
          }
          return
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
