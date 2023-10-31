<script lang="ts">
  import UserInfo from "./components/UserInfo.svelte";
  import Summary from "./components/Summary.svelte";
  import CardInfo from "./components/CardInfo.svelte";
  import TermsAndConditions from "./components/TermsAndConditions.svelte";
  import Button from "$lib/UI/Button.svelte";
  import { P } from "flowbite-svelte";
</script>

<div class="grid grid-cols-4 gap-8">
  <div />
  <div>
    <UserInfo />
    <TermsAndConditions />
  </div>
  <div>
    <Summary />
    <CardInfo />
    <div class="donate-button-wrapper">
      <Button>
        <P size="4xl" align="center" weight="semibold" color="white"> DOAR </P>
      </Button>
    </div>
  </div>
  <div />
</div>

<style>
  .donate-button-wrapper {
    width: 100%;
    justify-content: center;
    padding-left: calc(50% - 95px);
  }
</style>
