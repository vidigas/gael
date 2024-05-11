<script lang="ts">
	import LinkButton from "$lib/UI/LinkButton.svelte";
	import { P } from "flowbite-svelte";


  import { onDestroy } from 'svelte';
  import { isMobile } from "../../stores/screenSize";

	let isMobileValue: boolean = false;
  const unsubscribe = isMobile.subscribe(value => {
    isMobileValue = value;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="page-wrapper">
	<div class="border-bottom">
		<P size="xl" class="border-bottom mb-2 mr-6 flex" weight="semibold">
			faça sua doação
		</P>
	</div>
	<P size="2xl" class="mt-4 mb-8" weight="thin">
		Nos ajude a oferecer uma educação de qualidade para mais crianças da comunidade de Boracéia. 
	</P>

	<div class="button-wrapper">
		<div class="button mr-8">
			<LinkButton src="/ajude/mensal">
				<P size="xl" align="center" weight="thin">
					doação mensal
				</P>
			</LinkButton>
		</div>
		<LinkButton src="/ajude/unica">
			<P size="xl" align="center" weight="thin">
				doação única
			</P>
		</LinkButton>
	</div>

	<P size="2xl" class="mt-20" weight="thin"
		>Também é possível fazer doações diretamente na nossa conta bancária:</P
	>
	<P class="mt-4" size="2xl" weight="thin">
		Associação Cultural e Recreativa Gael <br />
		banco C6 agência 0001 conta corrente 274153475 <br />
		CNPJ 51.114.355/0001- 42 (pix) <br />
	</P>
</div>

<style lang="scss">
	.page-wrapper {
		width: 80%;
		margin-top: 80px;
		span {
			margin-left: 10px;
			font-weight: 200;
		}
	}
	.button-wrapper {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	.border-bottom {
		border-bottom: 2px solid #FAC508;
		width: fit-content;
	}
</style>