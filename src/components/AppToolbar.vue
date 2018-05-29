<template>
	<v-ons-page>
		 <v-ons-toolbar>
		 	<div class="left">
		 		<slote name="left"></slote>
		 	</div>

		 	<div class="center"> {{title}} </div>
		 	
		 	<div class="right">
		 		<slote name="right"></slote>
		 	</div>
		 </v-ons-toolbar>
	</v-ons-page>
</template>

<script>
	export default {
		props: {
			title: {
				type: $string,
				default: 'Github App'
			}
		}

	}

</script>