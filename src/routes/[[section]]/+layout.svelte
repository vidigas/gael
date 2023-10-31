<script lang="ts">
    import LayoutFooter from '$lib/Layout/LayoutFooter.svelte';
    import LayoutNav from '$lib/Layout/LayoutNav.svelte';
</script>


<LayoutNav />
<main>
	<slot />
</main>
<LayoutFooter />

<style lang="scss">
	main {
		height: calc(100vh - 200px);
	}

	:global(body) { 
		background-color: #FEFAED;	
		margin: 0;
		padding: 0;
		height: 100vh;
	}
</style>

