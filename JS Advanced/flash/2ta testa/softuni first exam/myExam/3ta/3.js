class Forum {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([product]) {
        let productName = product.split(", ")[0];
        let productPrice = product.split(", ")[1];
        if (budget < productPrice) {
            throw new Error("Not enough money to buy this product");
        } else {
            budget -= productPrice;
            this.products.push(productName);
            return `You have successfully bought ${type}!`;
        }

    }
}
