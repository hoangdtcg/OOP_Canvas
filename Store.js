class Store {
    constructor(_name) {
        this.name = _name;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    showAllProduct() {
        let str = '';
        for (let i = 0; i < this.products.length; i++) {
            str += this.products[i].display2();
        }
        return str;
    }

    getCheapest(){
        let min = this.products[0].salePrice;
        let index = 0;
        for (let i = 0; i < this.products.length; i++) {
            if(this.products[i].salePrice < min){
                min = this.products[i].salePrice;
                index = i;
            }
        }
        return this.products[index];
    }
}
