<button onclick={data.handler} class={data.classNames ?? 'py-[10px] px-[30px] border-white border text-white hover:cursor-pointer hover:bg-[rgb(100,0,100)]'} type={ data.type ?? 'button'}>{data.content}</button>
<script lang="ts">
    let { data } = $props<{ data: {
        content: string;
        classNames?: string;
        handler?: () => void;
    }}>();
</script>