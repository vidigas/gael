<script lang="ts">
  interface SectionData {
    title: string;
    text: string;
    path: string;
  }
  import { A, P } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let section: SectionData;

  function handleClick(event: MouseEvent, path: string) {
    dispatch('selectRoute');

    // Prevent the default behavior of the click event
    event.preventDefault();


    // Navigate to the desired location
    goto(path);
  }

</script>
<li class="mb-1 mt-1">
  <A on:click={(e) => handleClick(e, section.path)} href={section.path} class="hover:no-underline">
    <P
      size="2xl"
      weight={"light"}
    >
      {section.title}
    </P>
  </A>
</li>


<style lang="scss">
    li {
      cursor: pointer;
      border-top: 2px solid #FAC508;
      &:last-of-type {
        border-bottom: 2px solid #FAC508;
        padding-bottom: 4px;
      }
    }
</style>