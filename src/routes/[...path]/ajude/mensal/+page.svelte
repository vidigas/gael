<script lang="ts">
  import Donation from "$lib/Donation/Donation.svelte";
  import { DonationType } from "../../../../interfaces";

</script>

<Donation type={DonationType.MENSAL} />

<style lang="scss">
  .button-wrapper {
    display: flex;
    button {
      margin-right: 25px;
    }
  }
  .other-button-wrapper {
    display: flex;
    flex-direction: row-reverse;
  }
</style>