<script lang="ts">
</script>

<button on:click|preventDefault>
	<slot />
</button>

<style lang="scss">
	button {
		align-items: center;
		border-radius: 5px;
		border: 2px solid rgba(250, 197, 8, 1);
		text-align: center;
		margin-top: 25px;
		width: 180px;
		cursor: pointer;
		height: 60px;
		outline: none;
		&:hover {
			background-color: rgba(250, 197, 8, 1);
		}
	}
</style>
