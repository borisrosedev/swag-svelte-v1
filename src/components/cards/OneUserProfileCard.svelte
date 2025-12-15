<script lang="ts">
    let { user, figureClassNames } = $props()
</script>
<article>
    {#if user.photos }
        <section>
            {#each user.photos as photo,index}
                <figure class={figureClassNames ?? ''}>
                    <img class="object-cover w-full full" src={photo} alt={'photo of ' + user.fullname} />
                </figure>
            {/each}
        </section>
        <section>
            

        </section>

    {/if }
</article>
