<article class={ aClassNames ?? "w-full flex flex-col my-[10px]"}>
    <section class={sClassNames ?? "flex flex-col w-full"}>
        <label class="text-white" for={data.id}>{data.label ?? ''}</label>
        <input 
            type={data.type ?? 'text'} 
            placeholder={data.placeholder ?? ''}
            name={data.id}
            id={data.id}
            class={iClassNames ?? "rounded-lg my-[5px] w-full"}
            aria-describedby={data.helper ? (data.id + '-helper') : ''}
        >
    </section>
    {#if data.helper}
        <section class="h-[20px] text-white text-sm">
            <p id={data.id + '-helper'}>{data.helper}</p>
        </section>
    {/if}
</article>

<script lang="ts">
    let { data, sClassNames, aClassNames , iClassNames } = $props<{
        data: any;
        aClassNames?: string;
        sClassNames?: string;
        iClassNames?: string;
    }>()
</script>