<script lang="ts"> 
let { data } = $props(); 
</script>


<article class="flex flex-row text-white">
    <img src={data.icon.src} alt={"image of" + data.icon.alt}>
    <span class="mx-[10px]" aria-label={data.ariaLabel}>{data.content}</span>
</article>