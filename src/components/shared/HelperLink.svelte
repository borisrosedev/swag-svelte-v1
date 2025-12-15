
<article class="my-[10px]">
    <p style="display:inline-block" class={pClassNames}>{data.mainContent}</p>
    <a class={aClassNames} href={data.href}>{data.linkContent}</a>
</article>

<script lang="ts">
    let { data, pClassNames, aClassNames } = $props();
</script>