<script lang="ts">
  import Home from "$lib/Home/Home.svelte";
  import type { HomeData } from "../../interfaces";

	export let data: HomeData;
</script>



<Home {data}/>