
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ShoppingCart } from 'app/models/shopping-cart';
import { Shipping } from 'app/models/shipping';
import { OrderService } from 'app/services/order.service';
import { AuthService } from 'app/services/auth.service';
import { Order } from 'app/models/order';



@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;

  shipping = new Shipping();
  userId: string;
  userSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
