<template>
	
		
      		<v-ons-search-input
      		:placeholder="placeholder"
      		:value="query"
      		@input="$emit('update:query', $event.target.value)">
      		</v-ons-search-input>

    	
    

</template>

<script>
	export default {
		props: {
			placeholder: String,
			query: String,
		}
	}

</script>