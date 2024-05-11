<script lang="ts">
  import { P } from "flowbite-svelte";
  import MenuItem from "./MenuItem.svelte";
  
  interface SectionData {
    title: string;
    text: string;
    path: string;
  }

  export let imageSrc: string;
  export let sections: {[key: string]:SectionData };
  export let activeSection: SectionData;
  let isMenuActive = false;

  function toggleMenu() {
    isMenuActive = !isMenuActive;
  }
</script>

<div class="flex container">
  <div class="wrapper">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="menu-icon">
      <img src="/menu_icon.svg" alt="the menu icon" on:click={toggleMenu} class="mb-4" />
    </div>
    {#if isMenuActive}
    <ul>
      {#each Object.values(sections) || [] as section}
      <MenuItem {section} on:selectRoute={toggleMenu}  />
      {/each}
    </ul>
    {:else}
    <ul>
      <MenuItem section={activeSection} />
    </ul>
    <P size="xl" weight="light" class="mt-8 mr-2">
      {@html activeSection.text.replace(/\n/g, '<br>')}
    </P>
    {/if}
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="main-image" src={imageSrc}/>
</div>


<style lang="scss">
  .container {
    flex-direction: column;
    height: calc(100vh - 180px);
  }
  .wrapper {
    width: 100%;
    flex: 1;
    .menu-icon {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
  ul {
    display: block;
    justify-content: center;
    list-style: none;
    padding-bottom: 8px;
  }
  img.main-image {
		width: 100%;
		min-width: 100%;
		max-height: 400px;
		object-fit: cover;
	}
</style>
