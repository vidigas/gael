<script>
    import LinkButton from "$lib/LinkButton.svelte";

</script>
<h1>Doação única</h1>
<subtitle>Sua contribuição é muito importante para garantirmos a continuidade do projeto</subtitle>

<div class="button-wrapper">
    <LinkButton src="/ajude/unica/25/checkout">
        R$ 25
    </LinkButton>
    <LinkButton src="/ajude/unica/50/checkout">
        R$ 50
    </LinkButton>
    <LinkButton src="/ajude/unica/100/checkout">
        R$ 100
    </LinkButton>
    <LinkButton src="/ajude/unica/200/checkout">
        R$ 200
    </LinkButton>
</div>
<div class="other-button-wrapper">
    <LinkButton src="/ajude/mensal/valor">
        Outro valor
    </LinkButton>
</div>

<style lang="scss">
    .button-wrapper {
        display: flex;
        button {
            margin-right: 25px;
        }
    }

</style>