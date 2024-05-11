<script lang="ts">
  import Checkout from "$lib/Checkout/Checkout.svelte";
  import { onDestroy } from 'svelte';
  import { isMobile } from "../../../../../stores/screenSize";
  import CheckoutMobile from "$lib/Checkout/CheckoutMobile.svelte";

  let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

onDestroy(() => {
  unsubscribe();
});

  export let data: any;

  const params = data.params.path.split("/");
  const value = params[1];
</script>

{#if isMobileValue}
  <CheckoutMobile />
{:else}
  <Checkout />
{/if}

