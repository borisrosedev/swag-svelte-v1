<script lang="ts">
	import Button from "../shared/Button.svelte";
    let { data } = $props();
</script>

<article class="flex w-[400px] h-[400px] mx-[20px] flex flex-col">
    <section class="h-[70%] flex">
        <section class="flex h-full flex-col w-[50%] me-[10px] items-center">
            <figure class="rounded-lg h-full w-[200px] overflow-hidden">
                <img src={data.image.src} alt={data.image.alt}>
            </figure>
        </section>
        <section class="flex flex-col w-[50%] text-white p-[10px]">
            <p class="">{data.description}</p>
        </section>
    </section>
    <section class="h-[30%] flex items-center justify-center">
        {#each data.buttons as btn}
            <Button data={btn} />
        {/each}
    </section>

</article>