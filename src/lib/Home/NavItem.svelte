<script lang="ts">
  interface SectionData {
    title: string;
    text: string;
    path: string;
  }
  import { A, P } from "flowbite-svelte";
  export let section: SectionData; 
  export let activeSection: SectionData; 

  $: active = section.title === activeSection.title

</script>
<li class={active ? "active" : undefined}>
  <A href={section.path} class="hover:no-underline">
    {#if active}
    <P
    size="2xl"
    weight={"normal"}>
    {section.title}
    </P>
    {:else }
    <P
      size="2xl"
      weight={"thin"}
    >
      {section.title}
    </P>
    {/if}
  </A>
</li>


<style lang="scss">
    li {
      color: rgb(30, 30, 30);
      cursor: pointer;
    }
    .active {
      border-top: 2px solid #FAC508;
    }
</style>