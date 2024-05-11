<script lang="ts">
  import { P } from 'flowbite-svelte';
</script>

<section class="mt-8 mb-12">
  <div class="content-wrapper">
    <div />
    <div class="msg-wrapper flex items-center justify-center">
      <P size="xl" weight="semibold" class="text-center">
        Muito obrigado por sua doação!
      </P>
    </div>
    <div />
  </div>
</section>
<img class="main-image" src="/obrigado.png"/>


<style lang="scss">
  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    .msg-wrapper {
      height: 150px;
      border: 2px solid #FAC508;
    }
  }
	img.main-image {
		width: 100%;
		min-width: 100%;
		max-height: 400px;
		object-fit: cover;
	}
</style>