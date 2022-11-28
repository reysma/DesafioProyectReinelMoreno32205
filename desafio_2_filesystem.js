const fs = require('fs')


class ProductManagerFilesystem {
    constructor(path) {
        this.path = path;
        this.init();
    }
    async getProducts() {
        try {
            const response = awaitfs.promises.readFile(this.path, "utf-8");
            return JSON.parse(response);
        }

        catch (error) {
            console.log(error);
        }
    }


    async addProduct({title, description, price, thumbnail, code, stock}) {
       try{
        if(!title, !description, !price, !thumbnail, !code, !stock) {
        console.log( "Las variables son obligatorias");

       }
        const newProduct = { title, description, price, thumbnail, code, stock};
       
       const  products = await this.getProducts();

       newProduct.id = !products.length ? 1 : products[products.length -1].id + 1;
       products.push(newProduct);
       await fs.promises.writeFile(this.path. JSON.stringify(products, null, 3));
       }
       catch (error){
        console.log(error);
       }
    
    }

    async getProductBy({productId}) {
        try{
            const buscarProduct = this.products.find(elem => elem.id == productId)
        if(buscarProduct) {
            return buscarProduct
        }
        else {
            console.log("Not Found");
        }
        }
        catch (error){
            console.log(error);
           }
    }
    async deleteById(id) {
        const idx = this.products.findIndex(p => p.id == id)
        this.products.splice(idx, 1)
        try{
            await this.saverFile()
        } catch(e) {
            console.log(error)
        }
    }


}