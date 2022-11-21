class ProductManager {

    constructor() {
        this.products = []
 
    }

getnextIDProduct = () => {
    const count = this.products.length
    if(count ==0)return 1
    const lastProduct = this.products[count - 1]
    const lastID = lastProduct.id
    const nextID = lastID + 1
    return nextID
}

getProducts = () => {
    return this.products
}
getProductById = (productId) => {
    const buscarProduct = this.products.find(elem => elem.id == productId)
    if(buscarProduct) {
        return buscarProduct
    }
    else {
        console.log("Not Found");
    }
}
addProduct = (title, description, thumbnail, code, stock) => {
    
    const id = this.getnextIDProduct()

    const product = {
        id,
        title,
        description, 
        thumbnail, 
        code, 
        stock,
    }
    const repeatCode = (element) => element.code === product.code

    if(!repeatCode) {
        this.products.push(product) 
    }
    else {
        console.log("Code is Repeat");
    }
   
}

}
