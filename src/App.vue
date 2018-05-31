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


  export default{

    components: {
    AppToolbar,
    AppSearch
    },

    data() {
      return {
        title: 'My app'

      };
    }
    
  };
</script>
