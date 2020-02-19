import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../../app/models/shopping-cart';
import { map, take } from 'rxjs/operators';
import { Game } from '../../app/models/game';
import { ShoppingCartItem } from '../../app/models/shopping-cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object('/shopping-carts/' + cartId)
      .valueChanges()
      .pipe(map((x) => (x) ? new ShoppingCart((x as any).items) : (x as any)
      ));
  }

  addToCart(game: Game) {
    this.updateItem(game, 1);
  }

  removeFromCart(game: Game) {
    this.updateItem(game, -1);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }


  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');

    if (cartId)
      return cartId;

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;

  }

  private getItem(cartId: string, gameId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + gameId);
  }

  private async updateItem(game: Game, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item = this.getItem(cartId, game.key);

    item
      .valueChanges()
      .pipe(take(1))
      .subscribe((data: ShoppingCartItem) => {
        const quantity = (data ? (data.quantity || 0) : 0) + change;

        if (!quantity)
          item.remove();

        else
          item.update({
            title: game.title,
            imageUrl: game.imageUrl,
            price: game.price,
            quantity
          });
      });
  }

}
