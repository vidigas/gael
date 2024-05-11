<script lang="ts">
  import Button from "$lib/UI/Button.svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
  import { P } from "flowbite-svelte";

  export let onClickOther: () => void;
</script>

<div class="button-wrapper mt-2">
  <div class="button">
    <LinkButton src="/ajude/unica/25/checkout">
      <div class="flex">
        <P size="lg" class="mt-8 ml-3"  weight="thin" color="white">R$</P>
        <P size="5xl" class="ml-1" weight="thin" color="white">25</P>
      </div>
    </LinkButton>
  </div>
  <div class="button">
    <LinkButton src="/ajude/unica/50/checkout">
      <div class="flex">
        <P size="lg" class="mt-8 ml-3"  weight="thin" color="white">R$</P>
        <P size="5xl" class="ml-1" weight="thin" color="white">50</P>
      </div>
    </LinkButton>
  </div>
  <div class="button">
    <LinkButton src="/ajude/unica/100/checkout">
      <div class="flex">
        <P size="lg" class="mt-8 ml-3"  weight="thin" color="white">R$</P>
        <P size="5xl" class="ml-1" weight="thin" color="white">100</P>
      </div>
    </LinkButton>
  </div>
  <div class="button">
    <LinkButton src="/ajude/unica/200/checkout">
      <div class="flex">
        <P size="lg" class="mt-8 ml-3"  weight="thin" color="white">R$</P>
        <P size="5xl" class="ml-1" weight="thin" color="white">200</P>
      </div>
    </LinkButton>
  </div>
</div>
<div class="button-wrapper flex flex-row">
  <div class="button">
    <Button on:click={onClickOther}>
      <P size="2xl" weight="bold" color="white" align="center">outro valor</P>
    </Button>
  </div>
</div>

<style lang="scss">
  .vertical-space {
    margin: 25px 25px 25px 0;
    width: 180px;
  }

  .button-wrapper {
    width: 100%;
    justify-content: center;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
