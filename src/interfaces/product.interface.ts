import type { Designer } from "./designer.interface";

interface Product {
    id: number,
    bestseller: boolean,
    name: string,
    images: {
            id?: number
            src: string, 
            alt: string
    }[],
    clothes: {
		id: number,
		description:string,
		price: number,
		designer: Designer
	}[]
}

export type { Product };