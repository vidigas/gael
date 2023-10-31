<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<nav>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img src="/logo_2.svg" alt="the logo" on:click={() => goto('/')} class="mr-6 logo" />
	<img src="/logo_name.svg" alt="the written logo" class="written-logo" on:click={() => goto('/')}/>
</nav>

<style lang="scss">
  	nav {
		padding: 10px;
		height: 150px;
		display: flex;
    .logo{
      cursor: pointer;
    }
		.written-logo {
      cursor: pointer;
			margin-left: -20px;
			height: 90px;
			margin-top: 30px;
		}
	}

</style>