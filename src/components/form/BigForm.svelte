<form class={ formClassNames ?? "flex flex-col"}
method="POST"
	use:enhance={({ formElement, formData, action, cancel }) => {
		return async ({ result }) => {
			// `result` is an `ActionResult` object
			if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
			}
		};
	}}
>
    <section class="flex flex-col w-full">
        <section class="flex w-full">
            <section class="flex flex-col md:flex-row w-full">
                <section class="md:me-[10px] w-full">
                    {#each aFields as field, i}
                        <FormField data={field} iClassNames={field.iClassNames}/>
                    {/each}
                </section>
                {#if bFields}
                <section class="md:me-[10px] w-full">
                    {#each bFields as field, i}
                        <FormField data={field}/>
                    {/each}
                </section>
                {/if}
                {#if cFields}
                <section class="md:me-[10px] w-full">
                    {#each cFields as field, i}
                        <FormField data={field}/>
                    {/each}
                </section>
                {/if}
            </section>
            {#if oFields}
             <section class="md:me-[10px] w-full">
                {#each oFields as field, i}
                    <FormField data={field}/>
                {/each}
            </section>
            {/if}
        </section>
 

        <section class="my-[10px]">
            {#each buttons as btn, i}
                <Button data={btn} />
            {/each}
        </section>
    </section>
    {#if helpers}
        <section class="w-full">
            {#each helpers as helper}
                <HelperLink 
                    data={helper.data} 
                    pClassNames={helper.pClassNames} 
                    aClassNames={helper.aClassNames}
                />
            {/each}
        </section>
    {/if}
</form>

<script lang="ts">
	import FormField from "./FormField.svelte";
	import Button from "../shared/Button.svelte";
	import HelperLink from "../shared/HelperLink.svelte";
	import { applyAction, enhance } from "$app/forms";
	import { goto } from "$app/navigation";
    let { form, aFields, bFields, cFields, oFields, buttons, helpers, formClassNames, actionName } = $props<{
        actionName: 'register' | 'login'
    }>();
</script>