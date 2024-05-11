<script lang="ts">
  import Donation from "$lib/Donation/Donation.svelte";
  import { DonationType } from "../../../../interfaces";

  import { onDestroy } from 'svelte';
  import { isMobile } from "../../../../stores/screenSize";
import DonationMobile from "$lib/Donation/DonationMobile.svelte";

  let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

onDestroy(() => {
  unsubscribe();
});

</script>
{#if isMobileValue}
  <DonationMobile type={DonationType.MENSAL} />
{:else}
  <Donation type={DonationType.MENSAL} />
{/if}