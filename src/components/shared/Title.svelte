<script lang="ts">
    let { hType, content, classNames } = $props()
</script>

{#if hType == 'h1' }
  <h1 class={classNames ?? ''}>{content}</h1>
{:else if hType == '2'}
  <h2 class={classNames ?? ''}>{content}</h2>
{:else if hType == '3'}
  <h3 class={classNames ?? ''}>{content}</h3>
{:else}
  <h4 class={classNames ?? ''}>{content}</h4>
{/if}

<style>



</style>