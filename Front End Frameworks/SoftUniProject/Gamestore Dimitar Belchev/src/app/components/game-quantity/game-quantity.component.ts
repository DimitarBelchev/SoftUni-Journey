import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'app/models/game';
import { ShoppingCartService } from 'app/services/shopping-cart.service';


@Component({
  selector: 'game-quantity',
  templateUrl: './game-quantity.component.html',
  styleUrls: ['./game-quantity.component.css']
})
export class GameQuantityComponent {
  @Input('game') game: Game;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.game);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.game);
  }

}