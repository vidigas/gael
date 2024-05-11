<script lang="ts">
  import { Input, Label, Select } from "flowbite-svelte";
  import { P } from 'flowbite-svelte';

  let countries = [
    { value: 'fisica', name: 'Física' },
    { value: 'juridica', name: 'Jurídica' },
  ];
  let selected: string = countries[0].value;

</script>


<div class="form-wrapper">
  <P class="mb-12" size="xl" weight="light">DADOS DE FATURAMENTO</P>
  <form>
    <div class="grid gap-6">
      <div class="mt-4">
        <Label for="name" class="mb-1">nome</Label>
        <Input type="text" id="name" placeholder="" required />
      </div>
      <div class="-mt-2">
        <Label for="last_name" class="mb-1">sobrenome</Label>
        <Input type="text" id="last_name" placeholder="" />
      </div>
      <div class="-mt-2 select">
        <Label>
          pessoa
          <Select class="mt-1" items={countries} bind:value={selected} />
        </Label>
      </div>
      <div class="-mt-2">
        <Label for="cpf" class="mb-1">cpf/cnpj</Label>
        <Input type="text" id="last_name" placeholder="" required />
      </div>
      
      <div class="-mt-2 mb-6">
        <Label for="email" class="mb-1">email</Label>
        <Input type="email" id="email" placeholder="" required />
      </div>
    </div>
  </form>
</div>


<style lang="scss">
  .form-wrapper {
    padding: 20px;
    border-radius: 25px;
    .select {
      width: 50%;
    }
  }

</style>
