<!-- InputGroup.svelte -->
<script>
  export let label = '';
  export let placeholder = '';
  let inputValue = '';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();



  function handleInput() {
    dispatch('input', inputValue);
  }
</script>

<style lang="scss">

  .input-group {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;

    .input-label {
      margin-bottom: 5px;
    }

    .input-field {
      padding: 8px;
      border: 2px solid #FAC508;
      border-radius: 4px;
    }
  }
</style>

<div class="input-group">
  {#if label}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="input-label">{label}</label>
  {/if}
  <input 
    type="text"
    class="input-field"
    placeholder="digite o valor que deseja doar"
    on:input={handleInput}
    bind:value={inputValue}
  />
</div>