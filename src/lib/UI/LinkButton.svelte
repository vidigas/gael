<script lang="ts">
	export let src: string
</script>

<style lang="scss">
	a.button-like {
			display: inline-block;
			align-items: center;
			border: 2px solid rgba(250, 197, 8, 1);
			min-height: 60px;
			border-radius: 5px;
			text-align: center;
			padding: 10px 20px; /* Adjust padding as needed */
			margin-top: 25px;
			min-width: 180px;
			width: fit-content;
			cursor: pointer;
			font-size: large;
			text-decoration: none; /* Remove underlines from links */
		&:hover {
			background-color: rgba(250, 197, 8, 1);
		}
	}
</style>

<a href={src} class="button-like">
	<slot />
</a>
