<script lang="ts">
  import { Input, Label, Select } from "flowbite-svelte";
  import { P } from 'flowbite-svelte';

</script>


<div class="form-wrapper mt-10">
  <P class="mb-12" size="xl" weight="light">DADOS DO CARTÃO</P>
  <form>
    <div class="grid gap-6">
      <div class="mt-4">
        <Label for="name" class="mb-1">número do cartão</Label>
        <Input type="text" id="name" placeholder="" required />
      </div>
      <div class="-mt-2 flex">
        <div class="mr-4">
          <Label for="last_name" class="mb-1">data de validade</Label>
          <Input type="text" id="last_name" placeholder="" />
        </div>
        <div>
          <Label for="cpf" class="mb-1">código de segurança</Label>
          <Input type="text" id="last_name" placeholder="" required />
        </div>
      </div>
    </div>
  </form>
</div>


<style lang="scss">
  .form-wrapper {
    background-color: rgb(255, 234, 159);
    padding: 20px;
    border-radius: 25px;
  }

</style>
