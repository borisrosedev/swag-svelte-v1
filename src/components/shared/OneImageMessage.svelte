<script lang="ts">
    let { data, classNames } = $props();
</script>


<article class={classNames ?? 'flex flex-col'}>
    <section class="flex items-center justify-center">
        <figure class="overflow-hidden w-[200px] h-[200px]">
            <img 
                class="object-cover w-full h-full" 
                src={data.image.src} 
                alt={data.image.alt}
            >
        </figure>
    </section>
    <section class="p-[10px]">
        <p>{data.message.content}</p>
    </section>
</article>