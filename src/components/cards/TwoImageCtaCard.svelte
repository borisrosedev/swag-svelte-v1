<script lang="ts">
	import Button from "../shared/Button.svelte";

    let { data } = $props();
</script>

<article class={data.classNames ?? 'flex w-[400px] h-[400px]'}>

    <section class="flex flex-col w-[50%] me-[10px]" >
        <figure class='rounded-lg h-full overflow-hidden'>
            <img class='object-cover w-full h-full' src={data.bigImage.src} alt={data.bigImage.alt}>
        </figure>
    </section>
    <section class="flex flex-col w-[50%]">
        <figure class="rounded-lg overflow-hidden h-[70%]">
            <img src={data.smallImage.src} alt={data.smallImage.alt}>
        </figure>

        <section class="flex items-center justify-center h-[30%]">
            {#each data.buttons as btn}
                <Button data={btn} />
            {/each}
        </section>

    </section>



</article>