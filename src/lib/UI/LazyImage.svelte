<script lang="ts">
    export let src: String;
    import { lazyLoad } from "./lazyload";

</script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<img use:lazyLoad={src} alt="a image"/>