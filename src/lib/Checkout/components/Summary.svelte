<script lang="ts">
    import { P } from "flowbite-svelte";

  let amount = 100;
  
  </script>
  
  
  <div class="summary-wrapper mt-10">
    <P size="xl" class="mb-12" weight="light">SUA DOAÇÃO</P>
    <P class="mb-4" size="3xl" weight="light">R$ {amount},00 / mês</P>
    <P class="mb-4" size="sm" weight="light">1a renovação em 1 de outubro/2023</P>
  </div>
  
  
  <style lang="scss">
    .summary-wrapper {
      border: 2px solid rgb(250, 197, 8);
      padding: 20px;
      border-radius: 5px;
    }
  
  </style>
  