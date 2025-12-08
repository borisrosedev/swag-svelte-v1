<header class="fixed top-0 left-0 right-0 p-[20px] flex align-center justify-between">
        <a href="/">
            <figure class="w-[60px] h-[60px] border border-black">
                <img class="object-cover w-full h-full"  src="swag.png" alt="Logo of Swag App">
            </figure>
        </a>
        <nav class="text-white flex">
            <ul class="flex align-center justify-around">
                <li class="border self-center transition duration-300 px-[20px] py-[5px] hover:bg-[var(--custom-primary-color)]">
                    <a href="/register">Register</a>
                </li>
            </ul>
        </nav>
</header>
<main class="bg-[url(bg.jpg)] bg-[rgba(0,0,0,0.8)] bg-blend-overlay bg-center bg-cover bg-no-repeat min-h-[100vh] flex items-center justify-center">
    <section class="w-[300px]">
        <Form {fields} {buttons} />
    </section>
</main>
<script>
	import Form from "../../components/form/Form.svelte";

    const fields = [
        {
            id: 'email',
            type: 'email',
            label: 'Email'
        },
        {
            id: 'password',
            type: 'password',
            label: 'Password'
        }
    ]

    const buttons = [
        {
            type:'submit',
            content: 'Submit'
        }
    ]

</script>


