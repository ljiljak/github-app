<template>
	
		
      		<v-ons-search-input
      		:placeholder="placeholder"
      		:value="query"
      		style="width:100%"
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