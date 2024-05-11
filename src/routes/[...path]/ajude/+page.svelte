<script lang="ts">
  import Donate from "$lib/Donate/Donate.svelte";
  import { onDestroy } from 'svelte';
  import { isMobile } from "../../../stores/screenSize";
  import DonateMobile from "$lib/Donate/DonateMobile.svelte";

	let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

{#if isMobileValue}
	<DonateMobile />
{:else}
	<Donate />
{/if}



