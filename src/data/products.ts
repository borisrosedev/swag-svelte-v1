import DESIGNERS from './designers';

const CLOTHES = [
	{
		id: 1,
		name: 'White summer dress',
		description: 'Non adipisicing ex irure veniam sunt excepteur quis culpa.',
		images: [
			{
				src: '/products/product-1/white-doll-1.jpg',
				alt: 'Image of a white summer dress'
			},
		],
		price: 50000,
		designer: DESIGNERS[0]
	},
	{
		id: 2,
		name: 'grid stockings',
		description: 'Enim cupidatat consectetur ullamco eiusmod culpa ut aliqua.',
		price: 1500,
		designer: DESIGNERS[1],
		images: [
			{
				src: '/items/stockings-1.jpg',
				alt: 'Image of a white summer dress'
			},
			{
				src: '/items/stockings-2.jpg',
				alt: 'Image of a white summer dress'
			}
		],
	},
	{
		id: 3,
		name:'leather ankle boots',
		description: 'Duis non velit laborum fugiat ullamco culpa eiusmod laborum sint.Est est velit irure adipisicing do cupidatat reprehenderit elit sit quis in quis. Aliqua tempor mollit eu pariatur duis eiusmod ea ut quis. Aliquip occaecat dolore occaecat in minim fugiat ipsum duis do sit laborum. Sint cupidatat tempor eiusmod aute dolore. Ipsum ex esse exercitation aute exercitation sint ipsum. Id ea quis ex non aliqua cillum. Adipisicing elit sit mollit laboris aliquip velit eu officia minim anim cillum.',
		price: 150000,
		designer: DESIGNERS[2]
	},
	{
		id: 4,
		name: 'red country shirt',
		description: 'Voluptate duis dolor nisi laborum est ullamco reprehenderit dolore enim sint irure ad.Exercitation voluptate Lorem mollit cupidatat consequat consequat do ad. Culpa non ullamco id ullamco ipsum quis cillum laboris labore. Aliquip ad id culpa ullamco duis sint non commodo id dolore non ex officia voluptate. Exercitation ex consequat esse occaecat aute. Fugiat et velit do duis esse magna duis consequat cupidatat. Laboris anim Lorem amet esse consequat laborum laborum. Ea quis magna ad ipsum ipsum.',
		price: 50000,
		designer: DESIGNERS[0]
	},
	{
		id: 5,
		name: 'white dress',
		description: 'Laboris elit incididunt nulla non anim proident ullamco irure nisi et.Tempor pariatur ullamco sint cillum nostrud velit irure ad fugiat in. Et velit officia deserunt sint dolore et nulla ad ea nulla. Labore voluptate adipisicing consequat irure aliqua eu irure minim veniam ut. Aliquip id consequat ex aliquip qui mollit mollit sit ullamco magna esse sunt aliquip. Non quis eiusmod sint minim consequat ullamco sit. Qui ex non voluptate adipisicing aliquip officia non mollit qui enim.',
		price: 100000,
		designer: DESIGNERS[1]
	},
	{
		id: 6,
		name: 'black shoes',
		description: 'Non aliqua ullamco nostrud veniam anim culpa sit.Aliquip laboris duis aute incididunt laborum ex tempor officia aliqua sint. Enim id non dolor laboris consequat. Commodo incididunt veniam laboris do nisi dolore id voluptate commodo do cupidatat laborum elit. Enim dolor aliqua excepteur dolor dolor sint. Officia eiusmod qui tempor ipsum pariatur deserunt ad ullamco sunt. Qui fugiat occaecat quis pariatur elit cupidatat ut non.',
		price: 120000,
		designer: DESIGNERS[2]
	},
	{
		id: 7,
		name: 'black top',
		description: 'Est sint nostrud laborum cillum aute duis occaecat magna exercitation Lorem.Fugiat duis veniam Lorem amet incididunt deserunt ex dolor culpa pariatur ut qui. Ex enim eiusmod commodo adipisicing. Id labore dolore enim laboris reprehenderit in tempor velit laboris Lorem ullamco laboris.',
		price: 50000,
		designer: DESIGNERS[0]
	},
	{
		id: 8,
		name: 'white grid skirt',
		description: 'Ut adipisicing non occaecat aute ipsum eiusmod nulla Lorem.Ipsum commodo elit cillum esse. Irure aliquip amet cillum nulla adipisicing dolor amet qui. Sunt minim cupidatat occaecat irure sit fugiat ipsum amet magna sit. Irure consequat pariatur ad minim quis fugiat occaecat ut culpa officia officia. Nisi est nulla aliqua enim magna adipisicing in excepteur pariatur irure magna voluptate. Id pariatur adipisicing ea dolore sit cupidatat occaecat non. Consectetur commodo officia esse dolor sit reprehenderit in magna anim magna qui nostrud.',
		price: 100000,
		designer: DESIGNERS[1]
	},
	{
		id: 9,
		name: 'black high shoes',
		description: 'Elit consectetur laboris in aute.Dolore culpa cupidatat ullamco consequat ad pariatur fugiat consectetur et esse veniam. Tempor cillum fugiat enim commodo laborum esse nostrud incididunt ex culpa. Veniam in laborum labore dolor amet dolore velit ipsum duis labore ad pariatur.',
		price: 150000,
		designer: DESIGNERS[2]
	},
	{
		id: 10,
		name: 'shoes',
		description: 'Ex do enim laborum non minim cillum amet.',
		price: 15000,
		designer: DESIGNERS[0]
	}
];

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
			
		]
	},
	{
		id: 4,
		likes: 200,
		name: 'New Louis',
		bestseller: false,
		images: [
			{
				src: '/products/product-4/shoes-1.jpg',
				alt: 'shoes'
			},
			{
				src: '/products/product-4/shoes-2.jpg',
				alt: 'shoes'
			},
			{
				src: '/products/product-4/shoes-3.jpg',
				alt: 'shoes'
			},
			{
				src: '/products/product-4/shoes-4.jpg',
				alt: 'shoes'
			}
		],
		clothes: [
			
		]
	}
];

function getOneItemById(id: number) {
	return CLOTHES.find((el) => el.id == id);
}

function getOneProductById(id: number) {
	return PRODUCTS.find((el) => el.id == id);
}

export { getOneProductById, getOneItemById };
export default PRODUCTS;
