<script lang="ts">
    let { data, classNames } = $props()
</script>

<article class={classNames ?? ''}>
    <p>{data.content}</p>
</article>