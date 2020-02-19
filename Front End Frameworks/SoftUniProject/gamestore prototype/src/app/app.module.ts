import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminGamesComponent } from './components/admin-games/admin-games.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameQuantityComponent } from './components/game-quantity/game-quantity.component';
import { GamesComponent } from './components/games/games.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { SignupComponent } from './components/signup/signup.component';
import { GameFilterComponent } from './components/games/game-filter/game-filter.component';

import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular7-data-table';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { OrderService } from './services/order.service';
import { GameService } from './services/game.service';
import { environment } from 'environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { ProductsComponent } from './components/products/products.component';

// import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';

// import { ProductCardComponent } from './components/product-card/product-card.component';
// import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';

// import { ProductService } from './services/product.service';

// import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';

// import { AdminProductsComponent } from './components/admin-products/admin-products.component';
// import { ProductFormComponent } from './components/product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminGamesComponent,
    NavbarComponent,
    CheckOutComponent,
    HomeComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    GameCardComponent,
    GameFormComponent,
    GameQuantityComponent,
    GamesComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    SignupComponent,
    GameFilterComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([

      { path: '', component: GamesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },

      { path: 'admin/games/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/games/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/games', component: AdminGamesComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard] },

      { path: 'games', component: GamesComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },

      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] }

    ])
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    GameCardComponent,
    GameQuantityComponent,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [
    AuthService,
    UserService,
    CategoryService,
    GameService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
