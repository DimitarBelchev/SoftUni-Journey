import { Game } from './game';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];

    constructor(private itemsMap: { [gameId: string]: ShoppingCartItem}) {
        itemsMap = itemsMap || {};

        for (const gameId in itemsMap) {
            const item = itemsMap[gameId];
            this.items.push(new ShoppingCartItem({ ...item, key: gameId })); 
        }
    }

    getQuantity(game: Game) {
        if (!this.itemsMap)
            return 0;       

        const item = this.itemsMap[game.key];
        return item ? item.quantity : 0;
      }

    get totalItemsCount() {
        let count = 0;
        for (const gameId in this.itemsMap)
            count += this.itemsMap[gameId].quantity;

        return count;
    }

    get totalPrice() {
        let sum = 0;
        for (const gameId in this.items)
            sum += this.items[gameId].totalPrice;

        return sum;
    }
}
