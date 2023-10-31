<script lang="ts">
  import { A, P } from "flowbite-svelte";
    import NavItem from "./NavItem.svelte";
  interface SectionData {
    title: string;
    text: string;
    path: string;
  }

  interface HomepageData {
    sections: Array<SectionData>;
    activeSection: SectionData;
  }

  export let sections: Array<SectionData>;
  export let activeSection: SectionData;
</script>

<div class="flex">
  <div class="horizontal-space" />

  <div class="ml-12 wrapper">
    <ul>
      {#each Object.values(sections) || [] as section}
        <NavItem {section} {activeSection} />
      {/each}
    </ul>
    <P size="xl" weight="light" class="mt-8 mr-12">
      {activeSection.text}
    </P>
  </div>
</div>

<style lang="scss">
  .horizontal-space {
    width: 200px;
  }
  .wrapper {
    width: 100%;
  }
  ul {
    display: flex;
    list-style: none;
  }
</style>
