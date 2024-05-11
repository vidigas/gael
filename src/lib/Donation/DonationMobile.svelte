<script lang="ts">
  import { P } from "flowbite-svelte";
  import DonationButtonsMobile from "./DonationButtonsMobile.svelte";
  import DonationCustomMobile from "./DonationCustomMobile.svelte";

enum DonationType {
  MENSAL,
  UNICA
}
export let type: DonationType
$: isCustomValue = false;
</script>

<div class="page-wrapper">
  <ul class="mt-4">
    <li class="mb-1 mt-1">
        <P
          size="2xl"
          weight={"light"}
        >
        doação {type === DonationType.MENSAL ? 'mensal' : 'única'}
      </P>
    </li>
  </ul>
<P size="xl" class="mb-4 mt-4"  weight="thin">
  Sua doação é muito importante para garantirmos a continuidade do projeto
</P>

{#if !isCustomValue}
  <DonationButtonsMobile onClickOther={() => isCustomValue = true} />
{:else }
  <DonationCustomMobile onCancel={() => isCustomValue = false} />
  {/if}
</div>

<style lang="scss">
.page-wrapper {
  width: 100%;
  li {
      cursor: pointer;
      border-top: 2px solid #FAC508;
      &:last-of-type {
        border-bottom: 2px solid #FAC508;
        padding-bottom: 4px;
      }
    }
  
  .vertical-space {
    margin: 25px 25px 25px 0;
    width: 180px;
  }
}
</style>
