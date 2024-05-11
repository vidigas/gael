<script lang="ts">
  import { A, P } from "flowbite-svelte";
    import NavItem from "./NavItem.svelte";
  interface SectionData {
    title: string;
    text: string;
    path: string;
  }

  interface HomepageData {
    sections: {[key: string]:SectionData };
    activeSection: SectionData;
  }

  export let sections: {[key: string]:SectionData };
  export let activeSection: SectionData;
</script>

<div class="flex">
  <div class="wrapper">
    <ul>
      {#each Object.values(sections).filter(s => s.path !== 'ajude') || [] as section}
        <NavItem {section} {activeSection} />
      {/each}
    </ul>
    <P size="xl" weight="light" class="mt-8 mr-2">
      {@html activeSection.text.replace(/\n/g, '<br>')}
    </P>
  </div>
</div>

<style lang="scss">
  .wrapper {
    width: 80%;
    min-width: 600px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding-bottom: 8px;
    border-bottom: 2px solid #FAC508;
  }
</style>
