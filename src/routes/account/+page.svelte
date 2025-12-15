<script lang="ts">
import type { PageProps } from "../$types";
import TextMessage from "../../components/message/TextMessage.svelte";
import Button from "../../../src/components/shared/Button.svelte"
let { data } = $props() as any;

</script>

<header class="fixed top-0 left-0 right-0 p-[20px] flex align-center justify-between">
        <a href="/">
            <figure class="w-[60px] h-[60px] border border-black">
                <img class="object-cover w-full h-full"  src="swag.png" alt="Logo of Swag App">
            </figure>
        </a>
        <nav class="text-white flex">
            <ul class="flex align-center justify-around">
                <li class="self-center transition duration-300 px-[20px] py-[5px] ">
                    <form method="POST" action="">
                        <button 
                            type="submit" 
                            formaction="?/logout&redirectTo=login" 
                            class="px-[30px] py-[10px] rounded-lg hover:cursor-pointer text-white bg-[var(--custom-third-color)] hover:bg-[var(--custom-secondary-color)]"
                            >Logout</button>
                    </form>
                </li>
            </ul>
        </nav>
</header>

<main class="px-[20px] pb-[200px] pt-[15vh] bg-[url(bg.jpg)] bg-[rgba(0,0,0,0.8)] bg-blend-overlay bg-center bg-cover bg-no-repeat min-h-[100vh] flex flex-col md:flex-row">
    {#await data as any}
        <TextMessage 
            data={{ content: 'Loading ...'}} 
            classNames={"text-white bg-[url(--custom-third-color)] p-[20px]"}
        />
    {:then}
        <section>
            <section class="">
                <TextMessage 
                    data={{ content: 'Welcome back ' + data.user.firstname }} 
                    classNames={"text-white bg-[var(--custom-primary-color))] py-[5px] px-[30px] rounded-lg"}
                />
            </section>
            <section>
                <
            </section>
            
        </section>
    {/await}
</main>