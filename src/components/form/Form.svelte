<form class="flex flex-col">
    <section>
        {#each fields as field, i}
            <FormField data={field}/>
	    {/each}
    </section>
    <section class="my-[5px]">
        {#each buttons as btn, i}
            <Button data={btn} />
        {/each}
    </section>
</form>

<script lang="ts">
	import FormField from "./FormField.svelte";
	import Button from "../shared/Button.svelte";
    let { fields, buttons } = $props();
</script>