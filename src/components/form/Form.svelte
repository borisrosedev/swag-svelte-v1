<form 
class={ formClassNames ?? "flex flex-col"}
    method="POST"
    action={'?/' + actionName}
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
    <section class="flex flex-col">
        <section>
            {#each fields as field, i}
                <FormField data={field}/>
            {/each}
        </section>

        <section class="my-[10px]">
            {#each buttons as btn, i}
                <Button data={btn} />
            {/each}
        </section>
    </section>
    {#if helpers}
        <section>
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
    let { form, fields, buttons, helpers, formClassNames, actionName } = $props<{
        fields: any,
        actionName: 'register' | 'login' | 'login&redirectTo=account' | 'register&redirectTo=login'
        buttons: any,
        helpers: any, 
        form: any,
        formClassNames?: string
    }>();
</script>