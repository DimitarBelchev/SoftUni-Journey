import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Game } from 'app/models/game';
import { ShoppingCart } from 'app/models/shopping-cart';
import { GameService } from 'app/services/game.service';
import { ShoppingCartService } from 'app/services/shopping-cart.service';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games$;
  filteredGames: Game[] = [];
  category;
  cart$: Observable<ShoppingCart>;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private shoppingCartService: ShoppingCartService
  ) {
  }
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateGames();
  }
  private populateGames() {
    this.gameService.getAll().pipe(
      switchMap(games => {
        this.games$ = games;
        return this.route.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }
  private applyFilter() {
    this.filteredGames = (this.category) ?
      this.games$.filter(g => g.category === this.category) :
      this.games$;
  }
}