<script lang="ts">
</script>

<button on:click|preventDefault>
	<slot />
</button>

<style lang="scss">
	button {
		align-items: center;
		background-color: rgba(250, 197, 8, 1);
		border-radius: 15px;
		border: none;
		color: white;
		text-align: center;
		// padding: 2px 4px 0 0;
		margin: 25px 0;
		width: 190px;
		cursor: pointer;
		height: 100px;
		outline: none;
	}
</style>
