class ChristmasDinner {
    constructor(num) {
        if(num < 0){
            throw new Error("The budget cannot be a negative number");
        }
        this.budget = num;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    shopping(product){
        const ime = product[0];
        const cena =product[1];
        if(this.budget >= cena){
            this.products.push(ime);
            this.budget -= cena;
            return `You have successfully bought ${ime}!`;
        }
        else {
            throw new Error("Not enough money to buy this product");
        }
    }
    recipes(recipe){
        const recepta = recipe.recipeName;
        const list = recipe.productsList;
        const lipsvashti = list.filter(product => !this.products.includes(product));
        if(lipsvashti.length === 0){
            this.dishes.push({ recepta, productsList: list });
            return `${recepta} has been successfully cooked!`;
        }
        else {
            throw new Error("We do not have this product");
        }
    }
    inviteGuests(name, dish){
        if(!this.dishes.find(obj => obj.recepta === dish)){
            throw new Error("We do not have this dish");
        }
        else if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited");
        }
        else {
            this.guests[`${name}`] = dish;
            return `You have successfully invited ${name}!`;
        }
    }
}