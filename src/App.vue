<template>
    <v-ons-page>
      <AppToolbar />
      <div class="content">
      <AppSearch
        :query.sync="query"
        placeholder="Search">
     </AppSearch>

      <v-ons-list v-if="!isLoading && repos.length">
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
      <p v-if="isLoading">
        <v-ons-progress-circular indeterminate></v-ons-progress-circular>
      </p>
      <div v-if="!repos.length">
        <EmptyState type="repository" />
      </div>
  </div>

    </v-ons-page>
</template>

<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import { gitHub } from './services/GitHub.js'
import debounce from 'lodash/debounce'
import EmptyState from './components/EmptyState.vue'



  export default{

    components: {
    AppToolbar,
    AppSearch,
    EmptyState
    },

    data() {
      return {
        query: '',
        repos: [],
        isLoading: false,
      
      };
    },

    methods: {
    getRepos: debounce(function () {
      
      gitHub.getRepos(this.query)
        .then(response => {
          if (this.repos = !null) {
            this.repos = response.data
            this.isLoading = false
        
          }
          //console.log(response)
        }).catch(()=> {
          this.isLoading = false
        })
      }, 500)
    },

    watch: {
      query() {
        this.isLoading = true
        this.getRepos()
      }
    }

    


  };
</script>
