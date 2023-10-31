<script lang="ts">
	import LayoutFooter from "$lib/Layout/LayoutFooter.svelte";
	import LayoutNav from "$lib/Layout/LayoutNav.svelte";
</script>

<LayoutNav />
<main>
	<slot />
</main>
<LayoutFooter />

<style lang="scss">
	main {
		min-height: calc(100vh - 270px);
	}

	:global(body) {
		background-color: #fefaed;
		margin: 0;
		padding: 0;
	}
</style>
