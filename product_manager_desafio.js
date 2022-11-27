class ProductManager {
    #precioBaseDeGanancia
    constructor() {
        this.products = []
        this.#precioBaseDeGanancia = 0.15
    }

getProducts = () => {
    return this.products
}

getnextIDProduct = () => {
    const count = this.products.length
   
    const nextID = (count > 0) ? this.products[count - 1].id +1 : 1
  
    return nextID
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
addProduct = (title, description, price, thumbnail, code, stock) => {
    
    const product = {
        id: this.getnextIDProduct(),
        title,
        description, 
        price,
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
const product = new ProductManager()

console.log("Equipos", product.getProducts());

product.addProduct("Cromatografo Gases", "GC-MS-SQ8", 5300, "imagen1",1, 4 )
product.addProduct("Adsorcion Atomica", "AA-PinAAcle-900", 6500, "imagen2",2, 3 )
product.addProduct("Analizador Elemental", "EA-2400", 7200, "imagen3",3, 6 )
product.addProduct("Equipo ICP", "ICP-MS NEXION-1000", 7500, "imagen4",4, 2 )
product.addProduct("microscopio Analitico", "Spotlight-200", 3500, "imagen5",5, 5 )
product.addProduct("Espectrofotometro", "UV-Lambda-1050", 4500, "imagen6",6, 6 )

product.getProductById(1)
console.log("Equipos2", product.getProducts());