<script lang="ts">
	import HomeContent from "$lib/Home/HomeContent.svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
  import type { HomeData } from "../../interfaces";

	export let data: HomeData;

	$:imageSrc = `${data.imageSrc}.png`
	$: activeSection = data.sectionData

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img class="main-image" src={imageSrc}/>
<section class="mt-8">
	<HomeContent sections={data.sections} {activeSection} />
	<div class="flex">
		<img src="logo_2.svg" alt="the logo" class="ml-8 mr-4"/>
		<LinkButton src="/ajude">
			<div class="donate">faça sua doação</div>
		</LinkButton>
	</div>
</section>

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
		img {
			height: 100px;
			margin-top: 25px;
		}
	}

	.donate {
		font-size: 25px;
	}
</style>