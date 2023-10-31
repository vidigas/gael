<script lang="ts">
  import Button from "$lib/UI/Button.svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
  import { P } from "flowbite-svelte";

  export let onClickOther: () => void;
</script>

<div class="button-wrapper mt-12 flex">
  <LinkButton src="/ajude/unica/25/checkout">
    <P size="4xl" class="mt-3 ml-3" weight="bold" color="white">R$ 25</P>
  </LinkButton>
  <LinkButton src="/ajude/unica/50/checkout">
    <P size="4xl" class="mt-3 ml-3" weight="bold" color="white">R$ 50</P>
  </LinkButton>
  <LinkButton src="/ajude/unica/100/checkout">
    <P size="4xl" class="mt-3 ml-3" weight="bold" color="white">R$ 100</P>
  </LinkButton>
  <LinkButton src="/ajude/unica/200/checkout">
    <P size="4xl" class="mt-3 ml-3" weight="bold" color="white">R$ 200</P>
  </LinkButton>
</div>
<div class="button-wrapper flex flex-row">
  <div class="vertical-space" />
  <div class="vertical-space" />
  <div class="vertical-space" />
  <div class="mr-6">
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
    button {
      margin-right: 25px;
    }
  }
</style>
