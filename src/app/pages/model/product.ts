export class Product {
    code: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    


    constructor(code, name, description, quantity, price) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    };
}
