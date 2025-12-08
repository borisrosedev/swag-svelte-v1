import type { Product } from "../interfaces/product.interface"


function productToImage(product:Product,index = 0, classNames?: string) {

    const image = product.images[index]

    return {
        id: product.id,
        image,
        classNames
    }
}

export default productToImage;