import type { Product } from "../interfaces/product.interface";



function filterProducts(products: Product[], filter: 'bestseller' | 'regular' = 'regular'){
    switch(filter){
        case 'bestseller':
            return products.filter((el) => el.bestseller)
        case 'regular':
            return products.filter((el) => el.bestseller == false)
        default:
            return products
    }   
}

export default filterProducts;