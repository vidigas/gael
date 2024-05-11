<script lang="ts">
	  import { P } from "flowbite-svelte";
    import DonationButtons from "./DonationButtons.svelte";
    import DonationCustom from "./DonationCustom.svelte";

  enum DonationType {
    MENSAL,
    UNICA
  }
  export let type: DonationType
  $: isCustomValue = false;
</script>

<div class="page-wrapper">
  <div class="border-bottom">
    <P size="2xl" class="mb-2 mr-6" weight="semibold">
      doação {type === DonationType.MENSAL ? 'mensal' : 'única'}
	  </P>
  </div>
  <P size="2xl" class="mb-4 mt-4"  weight="thin">
    Sua doação é muito importante para garantirmos a continuidade do projeto
  </P>

  {#if !isCustomValue}
    <DonationButtons onClickOther={() => isCustomValue = true} />
  {:else }
    <DonationCustom onCancel={() => isCustomValue = false} />
    {/if}
</div>

<style lang="scss">
	.page-wrapper {
		width: 80%;
		margin-top: 80px;
		span {
			margin-left: 10px;
			font-weight: 200;
		}
    .vertical-space {
      margin: 25px 25px 25px 0;
			width: 180px;
    }
    .border-bottom {
		  border-bottom: 2px solid #FAC508;
	  	width: fit-content;
	 }
	}
</style>
