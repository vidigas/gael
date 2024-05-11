<script lang="ts">
	import { goto } from '$app/navigation';
  import LinkButton from '$lib/UI/LinkButton.svelte';
  import { P } from 'flowbite-svelte';
	import { page } from '$app/stores';
  import { isMobile } from '../../stores/screenSize';
  import { onDestroy } from 'svelte';
  // Use subscribe to get the current value of isMobile
  let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

  // Don't forget to unsubscribe when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });
</script>

<nav>
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="flex">
		<img src="/logo_2.svg" alt="the logo" on:click={() => goto('/')} class="mr-6 logo" />
		<img src="/logo_name.svg" alt="the written logo" class="written-logo" on:click={() => goto('/')}/>
	</div>

	{#if $page?.route?.id === "/[[section]]" && !isMobileValue}
	<div class="donate-button">
		<LinkButton src="/ajude">
			<P 
				size="2xl"
				weight={"normal"}
				align="center"
				color="white">
					quero ajudar
			</P>
		</LinkButton>
	</div>
	{/if}
</nav>

<style lang="scss">
  	nav {
		padding: 10px;
		height: 150px;
		width: 100%;
		display: flex;
		justify-content: space-between;
    .logo{
      cursor: pointer;
    }
		.written-logo {
      cursor: pointer;
			margin-left: -20px;
			height: 90px;
			margin-top: 30px;
		}
		.flex {
			display: flex;
		}
		.donate-button {
			margin-top: 25px;
		}
	}

	@media screen and (max-width: 900px) {
		nav {
			justify-content: center;
		}
	}

</style>