<script lang="ts">
    let { data } = $props()
</script>
<a 
    href={'/products/' + data.id} 
>
   <figure class={"overflow-hidden " + data.classNames}>
        <img 
            class="object-cover w-full h-full rounded-lg" 
            src={data.image.src} 
            alt={data.image.alt} 
        >
   </figure>
</a>