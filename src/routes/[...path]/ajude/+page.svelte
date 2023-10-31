<script>
	import LinkButton from "$lib/UI/LinkButton.svelte";
	import { P } from "flowbite-svelte";
</script>

<div class="page-wrapper">
	<P size="xl" class="mb-4 ml-10 flex" weight="semibold"
		>Faça uma doação!
		<span
			>E nos ajude a oferecer uma educação de qualidade para mais crianças da
			comunidade de Boracéia</span
		>
	</P>

	<div class="button-wrapper">
		<LinkButton src="/ajude/mensal">
			<P size="2xl" align="center" weight="semibold" color="white">
				doação Mensal
			</P>
		</LinkButton>
		<LinkButton src="/ajude/unica">
			<P size="2xl" align="center" weight="semibold" color="white">
				doação única
			</P>
		</LinkButton>
	</div>

	<P size="xl" class="mt-10 ml-12" weight="thin"
		>Também é possível fazer doações diretamente na nossa conta bancária:</P
	>
	<P class="mt-4 ml-12">
		Associação Cultural e Recreativa Gael <br />
		banco C6 agência 0001 conta corrente 274153475 <br />
		CNPJ 51.114.355/0001- 42 (pix) <br />
	</P>
</div>

<style lang="scss">
	.page-wrapper {
		width: 80%;
		margin-top: 80px;
		margin-left: 10%;
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
</style>
