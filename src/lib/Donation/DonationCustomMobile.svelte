<script lang="ts">
  import Button from "$lib/UI/Button.svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
  import InputGroup from "$lib/UI/InputGroup.svelte";
import { Input, P } from "flowbite-svelte";

export let onCancel: () => void;

</script>

<div class="donation-wrapper mt-4">
  <div class="input-wrapper mt-12">   
    <InputGroup label="" />
    <div class="buttons-wrapper">  
      <div class="button">
        <Button on:click={onCancel}>
          <P size="2xl" weight="thin" align="center">Cancelar</P>
        </Button>
      </div>
    </div>
    <div class="buttons-wrapper">  
      <div class="button">
        <LinkButton src="/ajude/unica/200/checkout">
          <P size="2xl" weight="thin" align="center">Doar</P>
        </LinkButton>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
.donation-container {
  width: 100%;
}
.donation-wrapper {
  min-height: 350px;
  .input-wrapper {
    .buttons-wrapper {
      width: 100%;
      display: block;
      .button {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
