<script lang="ts">
    export let data: any;

    const params = data.params.path.split('/');
    const isMensal = params[0] === "mensal"

</script>

<h1>Doação {isMensal ? "mensal" : "única"}</h1>
<subtitle>Sua contribuição é muito importante para garantirmos a continuidade do projeto</subtitle>
