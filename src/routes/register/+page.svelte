<header class="fixed top-0 left-0 right-0 p-[20px] flex align-center justify-between">
        <a href="/">
            <figure class="w-[60px] h-[60px] border border-black">
                <img class="object-cover w-full h-full"  src="swag.png" alt="Logo of Swag App">
            </figure>
        </a>
        <nav class="text-white flex">
            <ul class="flex align-center justify-around">
                <li class="border self-center transition duration-300 px-[20px] py-[5px] hover:bg-[var(--custom-primary-color)]">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
</header>
<main class="px-[20px] pb-[200px] pt-[15vh] bg-[url(bg.jpg)] bg-[rgba(0,0,0,0.8)] bg-blend-overlay bg-center bg-cover bg-no-repeat min-h-[100vh] flex flex-col  justify-center md:flex-row">
    <section class="h-full md:h-[500px] bg-[var(--custom-primary-color)] rounded-lg text-white flex items-center justify-center md:w-[600px] w-full md:w-[300px] md:mx-[20px] my-[0px] md:my-[20px]">
        <OneImageMessage  data={oneImageMessage} classNames/>
    </section>
    
    <section class="flex justify-center my-[30px] w-full md:p-[20px]">
        <BigForm {formClassNames} {aFields} {bFields} {buttons} {helpers}/>
    </section>
</main>
<script>
	import BigForm from "../../components/form/BigForm.svelte";
	import OneImageMessage from "../../components/shared/OneImageMessage.svelte";

    const formClassNames = 'flex flex-col w-[600px] md:w-full'


    const oneImageMessage = {
        image: {
            src: 'swag.png',
            alt: 'Logo of the Swag App'
        },
        message: {
            content: 'Hello the newbie ! We are so pleased you wish to become a part of the family. You will have 20 points of fidelity as soon as you have finished creating your account. You will see that they will allow you to receive mini gifts along the way.'
        }
    }

    const aFields = [
        {
            id: 'firstname',
            label: 'Firstname'
        },
        {
            id: 'lastname',
            label: 'Lastname'
        }   
    ]

       const bFields = [
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
            helper: 'The password should have at least 12 characters'
        },
        {
            id: 'confirmed-password',
            type: 'password',
            label: 'Confirm the password'
        }
    ]

    const helpers = [
        {
            data: {
                mainContent: 'You would like to see our terms of contract ?',
                linkContent: 'Read it here',
                href: '/terms-of-contract'
            },
            aClassNames: 'text-sm text-white underline',
            pClassNames: 'text-sm text-[var(--custom-third-color)]'
        },
        {
            data: {
                mainContent: 'You already have an account ?',
                linkContent: 'Log in here',
                href: '/login',
            },    
            aClassNames: 'text-sm text-white underline',
            pClassNames: 'text-sm text-[var(--custom-third-color)]'
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

