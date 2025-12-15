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
<main class="px-[20px] pb-[200px] pt-[15vh] bg-[url(bg.jpg)] bg-[rgba(0,0,0,0.8)] bg-blend-overlay bg-center bg-cover bg-no-repeat min-h-[100vh] flex flex-col items-center justify-center md:flex-row">
    <section class="bg-[var(--custom-primary-color)] rounded-lg text-white flex items-center justify-center md:w-[300px] w-full mx-[20px] md:my-[20px]">
        <OneImageMessage  data={oneImageMessage} classNames/>
    </section>
    <section class="flex items-center justify-center my-[30px] w-full md:w-[400px] md:p-[20px]">
        <Form actionName={'login&redirectTo=account'} form {fields} {buttons} {helpers} {formClassNames} />
    </section>
</main>
<script>
	import Form from "../../components/form/Form.svelte";
	import OneImageMessage from "../../components/shared/OneImageMessage.svelte";


    const formClassNames = 'flex flex-col w-[600px] md:w-full'


    const oneImageMessage = {
        image: {
            src: 'swag.png',
            alt: 'Logo of the Swag App'
        },
        message: {
            content: 'Welcome back ! We are so pleased to see you again. First off, you need to log in. We certainly have new clothes you are looking forward to knowing more about. Do not forget to check out your fidelity points to see if you can have a gift'
        }
    }

    const helpers = [
        {
            data: {
                mainContent: 'Forgot your password ?',
                linkContent: 'Reset it here',
                href: '#'
            },
            aClassNames: 'text-sm text-white underline',
            pClassNames: 'text-sm text-[var(--custom-third-color)]'
        },
        {
            data: {
                mainContent: 'No account yet ?',
                linkContent: 'Create one here',
                href: '/register',
            },    
            aClassNames: 'text-sm text-white underline',
            pClassNames: 'text-sm text-[var(--custom-third-color)]'
        }
    ]

    const fields = [
        {
            id: 'email',
            type: 'email',
            label: 'Email',
            helper: 'ex: johndoe@gmail.com'
        },
        {
            id: 'password',
            type: 'password',
            label: 'Password',
            placeholder: '************',
        }
    ]

    const buttons = [
        {
            type:'submit',
            content: 'Submit',
            classNames: 'px-[30px] duration-300 ease-in rounded-lg text-white hover:cursor-pointer py-[10px] bg-[var(--custom-third-color)] hover:bg-[var(--custom-secondary-color)] transition-all'
        }
    ]

</script>


