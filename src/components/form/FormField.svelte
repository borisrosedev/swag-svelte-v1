<article class="flex flex-col">
    <label class="text-white" for={data.id}>{data.label ?? ''}</label>
    <input 
        type={data.type ?? 'text'} 
        placeholder={data.placeholder ?? ''}
        name={data.id}
        id={data.id}
        class="rounded-lg my-[5px]"
    >
</article>

<script lang="ts">
    let { data } = $props()
</script>