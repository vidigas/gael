<script lang="ts">
  import UserInfo from "./components/UserInfo.svelte";
  import Summary from "./components/Summary.svelte";
  import CardInfo from "./components/CardInfo.svelte";
  import TermsAndConditions from "./components/TermsAndConditions.svelte";
  import { P } from "flowbite-svelte";
  import LinkButton from "$lib/UI/LinkButton.svelte";
</script>

<div class="ml-12 mr-12 grid grid-cols-2 gap-20">
  <div>
    <UserInfo />
    <TermsAndConditions />
  </div>
  <div>
    <CardInfo />
    <Summary />
    <div class="donate-button-wrapper">
      <LinkButton src="/ajude/unica/200/checkout/sucess">
        <P size="2xl" align="center" weight="semibold" color="white"> DOAR </P>
      </LinkButton>
    </div>
  </div>
</div>

<style>
  .donate-button-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
</style>
