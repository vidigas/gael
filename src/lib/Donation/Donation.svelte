<script lang="ts">
  import Button from "$lib/UI/Button.svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
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
	<P size="2xl" class="mb-4 ml-10" weight="normal"
		>Doação {type === DonationType.MENSAL ? 'mensal' : 'única'}
	</P>
  <P size="2xl" class="mb-4 ml-10 -mt-4"  weight="thin">
    Sua contribuição é muito importante para garantirmos a continuidade do projeto
  </P>

  {#if !isCustomValue}
    <DonationButtons onClickOther={() => isCustomValue = true} />
  {:else }
  <DonationCustom />
    {/if}
</div>

<style lang="scss">
	.page-wrapper {
		width: 80%;
		margin-top: 80px;
		margin-left: 10%;
		span {
			margin-left: 10px;
			font-weight: 200;
		}
    .vertical-space {
      margin: 25px 25px 25px 0;
			width: 180px;
    }
	}
</style>
