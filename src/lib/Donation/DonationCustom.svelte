<script lang="ts">
    import Button from "$lib/UI/Button.svelte";
    import LinkButton from "$lib/UI/LinkButton.svelte";
    import InputGroup from "$lib/UI/InputGroup.svelte";
  import { Input, P } from "flowbite-svelte";
  
  export let onCancel: () => void;

</script>

<div class="donation-container mt-12">
  <div />
  <div class="donation-wrapper mt-4">
    <div />
    <div class="input-wrapper mt-20">   
      <div>
        <InputGroup label="" />
        <div class="buttons-wrapper">
          <Button on:click={onCancel}>
              <P size="2xl" weight="thin" align="center">Cancelar</P>
          </Button>  
          <LinkButton src="/ajude/unica/200/checkout">
            <P size="2xl" weight="thin" align="center">Doar</P>
          </LinkButton>
        </div>
      </div>
    </div>
    <div />  
  </div>
  <div />
</div>

<style lang="scss">
  .donation-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 600px 1fr;
  }
  .donation-wrapper {
    padding: 20px;
    border-radius: 25px;
    min-height: 350px;
    display: grid;
    grid-template-columns: 1fr 80% 1fr;
    .input-wrapper {
      div {
        height: 10px;
      }
      .buttons-wrapper {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
