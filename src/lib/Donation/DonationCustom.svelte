<script>
    import LinkButton from "$lib/UI/LinkButton.svelte";
  import { Input, P } from "flowbite-svelte";
</script>

<div class="donation-container mt-12">
  <div />
  <div class="donation-wrapper mt-4">
    <div />
    <div class="input-wrapper mt-20">
      <div />
      <div>
        <Input
        type="text"
        id="name"
        class="leading-relaxed"
        placeholder="digite o valor que deseja doar"
        required
        />
        <div class="flex mt-2 ml-8">
          <LinkButton src="/ajude/unica/100/checkout">
            <P size="3xl" class="mt-3" weight="bold" color="white" align="center">Cancelar</P>
          </LinkButton>
          <LinkButton src="/ajude/unica/200/checkout">
            <P size="3xl" class="mt-3" weight="bold" color="white" align="center">Doar</P>
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
    grid-template-columns: 1fr 60% 1fr;
  }
  .donation-wrapper {
    background-color: rgb(255, 234, 159);
    padding: 20px;
    border-radius: 25px;
    min-height: 350px;
    display: grid;
    grid-template-columns: 1fr 60% 1fr;
    .input-wrapper {
      div {
        height: 10px;
      }
    }
  }
</style>
