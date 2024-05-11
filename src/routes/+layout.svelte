<script lang="ts">
  import "../app.postcss";
  import LayoutNav from '$lib/Layout/LayoutNav.svelte';

  import { onMount } from 'svelte';
  import { setupScreenSizeListener } from "../stores/screenSize";

  export const prerender = true;
  export const trailingSlash = 'always'; // Added this

  onMount(() => {
    const cleanup = setupScreenSizeListener();

    // Cleanup the event listener when the layout is destroyed
    return cleanup;
  });
</script>

<svelte:head>
   <title>Instituto Gael</title>
</svelte:head>


<LayoutNav />
<main>
<slot />
</main>

<style lang="scss">
  main {
    height: calc(100vh - 200px);
  }

  :global(body) {
    background-color: #ffffff;
    margin: 0 35px;
    padding: 0 35px;
    height: 100vh;
  }

  @media screen and (max-width: 900px) {
    :global(body) {
      padding: 0;
      margin: 0 15px;
    }
  }
</style>
