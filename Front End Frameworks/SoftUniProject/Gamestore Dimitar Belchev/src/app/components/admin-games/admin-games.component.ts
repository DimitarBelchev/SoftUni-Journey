import { Component, OnInit,OnDestroy } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular7-data-table';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';


@Component({
  selector: 'admin-games',
  templateUrl: './admin-games.component.html',
  styleUrls: ['./admin-games.component.css']
})
export class AdminGamesComponent implements OnDestroy {
  games: Game[];
  subscription: Subscription;
  tableResource: DataTableResource<Game>;
  items: Game[] = [];
  itemCount: number;

  constructor(private GameService: GameService) {
    this.subscription = this.GameService.getAll()
      .subscribe((games: Game[]) => {
        this.games = games;
        this.initializeTable(games);
      });
    }

  private initializeTable(games: Game[]) {
    this.tableResource = new DataTableResource(games);
    this.tableResource.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResource.count() 
      .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource)
      return;

    this.tableResource.query(params) 
      .then(items => this.items = items);
  }

  filter(query: string) {
    const filteredGames = (query) ?
      this.games.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.games;

    this.initializeTable(filteredGames);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
