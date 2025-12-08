import DESIGNERS from './designers';

const PRODUCTS = [
	{
		id: 1,
		likes: 500,
        bestseller: true,
		name: 'White Summer Lolita',
		images: [
			{
				src: '/products/product-1/white-doll-1.jpg',
				alt: 'Woman dress with a white summer dress, with stockings and leather ankle boots'
			},
			{
				src: '/products/product-1/white-doll-2.jpg',
				alt: 'Woman dress with a white summer dress, with stockings and leather ankle boots'
			}
		],
		clothes: [
			{
				id: 1,
				description: 'White summer dress',
				price: 50000,
				designer: DESIGNERS[0]
			},
			{
				id: 2,
				description: 'grid stockings',
				price: 50000,
				designer: DESIGNERS[1]
			},
			{
				id: 3,
				description: 'leather ankle boots',
				price: 150000,
				designer: DESIGNERS[2]
			}
		]
	},
	{
		id: 2,
		likes: 500,
		name: 'The Drifter got swag',
        bestseller: false,
		images: [
			{
				src: '/products/product-2/red-1.jpg',
				alt: 'woman with the hat and the red shirt with the white dress'
			},
			{
				src: '/products/product-2/red-2.jpg',
				alt: 'woman with the hat and the red shirt with the white dress'
			},
			{
				src: '/products/product-3/red-3.jpg',
				alt: 'woman with the hat and the red shirt with the white dress'
			}
		],
		clothes: [
			{
				id: 1,
				description: 'red country shirt',
				price: 50000,
				designer: DESIGNERS[0]
			},
			{
				id: 2,
				description: 'white dress',
				price: 100000,
				designer: DESIGNERS[1]
			},
			{
				id: 3,
				description: 'black shoes',
				price: 120000,
				designer: DESIGNERS[2]
			}
		]
	},
    {
		id: 3,
		likes: 900,
		name: 'Business with class',
        bestseller: false,
		images: [
			{
				src: '/products/product-3/black-3.jpg',
				alt: 'woman with a black top and a grid skirt, black stockings and high shoes'
			},
			{
				src: '/products/product-3/black-3.jpg',
				alt: 'woman with a black top and a grid skirt, black stockings and high shoes'
			},
			{
				src: '/products/product-3/black-3.jpg',
				alt: 'woman with a black top and a grid skirt, black stockings and high shoes'
			}
		],
		clothes: [
			{
				id: 1,
				description: 'black top',
				price: 50000,
				designer: DESIGNERS[0]
			},
			{
				id: 2,
				description: 'white grid skirt',
				price: 100000,
				designer: DESIGNERS[1]
			},
			{
				id: 3,
				description: 'black high shoes',
				price: 150000,
				designer: DESIGNERS[2]
			}
		]
	}
];

export default PRODUCTS;
