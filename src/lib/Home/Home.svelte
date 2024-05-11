<script lang="ts">
	import HomeContent from "$lib/Home/HomeContent.svelte";
  import type { HomeData, SectionData } from "../../interfaces";

	export let data: HomeData;

	$:imageSrc = `${data.imageSrc}.png`
	$: activeSection = data.sectionData

	import { isMobile } from '../../stores/screenSize';
  import { onDestroy } from 'svelte';
  import HomeMobileContent from "./HomeMobileContent.svelte";

	let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

  onDestroy(() => {
    unsubscribe();
  });

</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#if !isMobileValue}
	<img class="main-image" src={imageSrc}/>
	<section class="mt-8">
		<HomeContent sections={data.sections} {activeSection} />
	</section>
{/if}
{#if isMobileValue}
	<HomeMobileContent sections={data.sections} {activeSection} {imageSrc} />
	<!-- svelte-ignore a11y-missing-attribute -->
{/if}

<style lang="scss">
	img.main-image {
		width: 100%;
		min-width: 100%;
		max-height: 400px;
		object-fit: cover;
	}
	section {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
</style>