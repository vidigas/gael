<script lang="ts">
	import LinkButton from "$lib/UI/LinkButton.svelte";
	import { P } from "flowbite-svelte";
</script>

<div class="page-wrapper">
  <!-- <div class="menu-icon">
    <img src="/menu_icon.svg" alt="the menu icon" on:click={() => {}} class="mb-4" />
  </div> -->
  
  <ul class="mt-4">
    <li class="mb-1 mt-1">
        <P
          size="2xl"
          weight={"light"}
        >
          faça sua doação
        </P>
    </li>
  </ul>

	<P size="xl" class="mt-8 mb-8" weight="thin">
		Nos ajude a oferecer uma educação de qualidade para mais crianças da comunidade de Boracéia. 
	</P>

	<div class="button-wrapper">
		<div class="button">
			<LinkButton src="/ajude/mensal">
				<P size="xl" align="center" weight="thin">
					doação mensal
				</P>
			</LinkButton>
		</div>
    <div class="button">
      <LinkButton src="/ajude/unica">
        <P size="xl" align="center" weight="thin">
          doação única
        </P>
      </LinkButton>
    </div>
	</div>

	<P size="xl" class="mt-4" weight="thin"
		>Também é possível fazer doações diretamente na nossa conta bancária:</P
	>
	<P class="mt-4" size="xl" weight="thin">
		Associação Cultural e Recreativa Gael <br />
		banco C6 agência 0001 conta corrente 274153475 <br />
		CNPJ 51.114.355/0001- 42 (pix) <br />
	</P>
</div>

<style lang="scss">
	.page-wrapper {
		width: 100%;
    li {
      cursor: pointer;
      border-top: 2px solid #FAC508;
      &:last-of-type {
        border-bottom: 2px solid #FAC508;
        padding-bottom: 4px;
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
	}

</style>