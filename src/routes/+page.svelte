<script>
	import OneDesignerDescriptionCtaCard from "../components/cards/OneDesignerDescriptionCtaCard.svelte";
	import OneImageCtaCard from "../components/cards/OneImageCtaCard.svelte";
	import TwoImageCtaCard from "../components/cards/TwoImageCtaCard.svelte";
	import Button from "../components/shared/Button.svelte";
	import Title from "../components/shared/Title.svelte";
	import TrustBadge from "../components/shared/TrustBadge.svelte";
	import ARTICLES from "../data/articles";
    import PRODUCTS from "../data/products";
	import filterProducts from "../utils/filter-products";
	import productToImage from "../utils/product-to-image";

 
    

    const oneDesignerDescriptionCtaCard = {
        image : {
            src:ARTICLES[0].product.clothes[1].designer.photos[0].src,
            alt:ARTICLES[0].product.clothes[1].designer.photos[0].alt
        },
        description: ARTICLES[0].description,
        buttons: [
            {
                content: 'Read the article',
                classNames: 'px-[30px] rounded-lg py-[10px] bg-[var(--custom-secondary-color)] hover:bg-[var(--custom-third-color)] hover:cursor-pointer'
            }
        ]
    }
    const twoImageCtaCard = {
        bigImage: {
            src: PRODUCTS[0].images[0].src,
            alt: PRODUCTS[0].images[0].alt
        },
        smallImage: {
            src:  PRODUCTS[0].images[1].src,
            alt: PRODUCTS[0].images[1].alt
        },
        buttons: [
            {
                classNames: 'bg-[var(--custom-third-color)] text-white px-[30px] py-[10px] rounded-lg hover:bg-[var(--custom-secondary-color)] hover:cursor-pointer',
                content: 'Discover'
            }
        ]
    }
    

    const buttons = [
        {
            content: 'join us now',
            classNames: 'uppercase bg-[rgb(100,0,180)] hover:bg-[rgb(100,0,200)] hover:cursor-pointer rounded-xl text-white px-[30px] py-[8px]'
        }
    ]

    const trustBadges = [
        {
            icon: {
                src: '/icons/2k.svg',
                alt: 'over 2 000'
            },
            ariaLabel: 'over 2 000 daily clients',
            content: 'Daily clients'
        },
        {
            icon: {
                src: '/icons/verified-user.svg',
                alt: 'secured payment shield icon'
            },
            ariaLabel: 'Secure payment',
            content: 'Secure payment'
        },
         {
            icon: {
                src: '/icons/shield-lock.svg',
                alt: 'shield with a lock'
            },
            ariaLabel: 'iso 27001 compliant',
            content: 'ISO 27001 compliant'
        }
    ]

</script>
<header class="fixed top-0 left-0 right-0 p-[20px] flex align-center justify-between">
        <figure class="w-[60px] h-[60px] border border-black">
            <img class="object-cover w-full h-full"  src="swag.png" alt="Logo of Swag App">
        </figure>
        <nav class="text-white flex">
            <ul class="flex align-center justify-around">
                <li class="border self-center transition duration-300 px-[20px] py-[5px] hover:bg-[var(--custom-primary-color)]">
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
</header>
<main class="px-[20px] pb-[200px] pt-[15vh] bg-[url(bg.jpg)] bg-[rgba(0,0,0,0.8)] bg-blend-overlay bg-center bg-cover bg-no-repeat min-h-[100vh]">
    
    <section class="flex flex-col items-center justify-center">
        <Title 
            hType="h1" 
            classNames="rock-salt text-white text-4xl" 
            content="Swag"
        />
        <span class="my-[10px] text-2xl inter text-white">Cool looks, Effortless vibe</span>
    </section>

    <section class="flex flex-row items-center justify-center">
        {#each trustBadges as tb }
            <TrustBadge data={tb} />
        {/each}
    </section>

    <section class="flex flex-row items-center justify-center my-[50px]">
          {#each buttons as btn }
            <Button data={btn} />
        {/each}
    </section>
    

    <section class="flex">
        <section class="flex items-center justify-center">
                <TwoImageCtaCard data={twoImageCtaCard} />
        </section>
        <section class="flex items-center justify-center">
            <OneDesignerDescriptionCtaCard data={oneDesignerDescriptionCtaCard} />
        </section>
        <section class="flex flex-col">
            <section class="flex flex-row">
                {#each filterProducts(PRODUCTS) as product}
                    <OneImageCtaCard data={productToImage(product, 0, 'mx-[10px] w-[150px] h-[150px]')} />
                {/each}
            </section>
            <section class="flex items-center justify-center my-[20px]">
                <Button data={{content: 'Show all products', classNames: 'px-[30px] py-[10px] rounded-lg hover:cursor-pointer text-white bg-[var(--custom-third-color)] hover:bg-[var(--custom-secondary-color)]'}}/>
            </section>

        </section>

    </section>
    
</main>