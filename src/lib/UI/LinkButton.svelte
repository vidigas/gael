<script lang="ts">
	export let src: string
</script>

<style lang="scss">
	a.button-like {
			display: inline-block;
			align-items: center;
			background-color: rgba(250, 197, 8, 1);
			height: 100px;
			border-radius: 15px;
			border: none;
			text-align: center;
			padding: 10px 20px; /* Adjust padding as needed */
			margin: 25px 25px 25px 0;
			width: 180px;
			cursor: pointer;
			text-decoration: none; /* Remove underlines from links */
			color: white;
	}
</style>

<a href={src} class="button-like">
	<slot />
</a>
