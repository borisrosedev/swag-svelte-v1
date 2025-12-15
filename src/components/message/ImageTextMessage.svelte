<script lang="ts">
    let { data, messageClassNames, figureClassNames, contentClassNames } = $props()
</script>

<article class={messageClassNames ?? ''}>
    <figure class={figureClassNames ?? ''}>
        <img class="object-cover w-full h-full" src={data.image.src} alt={data.image.alt}>
    </figure>
    <section class={contentClassNames ?? ''}>
        <p>{data.message.content}</p>
    </section>

</article>