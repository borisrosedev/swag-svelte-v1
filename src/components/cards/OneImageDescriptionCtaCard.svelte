

<script lang="ts">
	import Button from "../shared/Button.svelte";

    let { data } = $props();
</script>

<article>

    <section class="card__rigth-part">
        <figure>
            <img src={data.image.src} alt={data.image.alt}>
        </figure>
    </section>
    <section class="card__left-part">
        <p>{data.description}</p>

        <section>
            {#each data.buttons as btn}
                <Button data={btn} />
            {/each}
        </section>

    </section>



</article>