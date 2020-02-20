import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'app/services/category.service';
import { GameService } from 'app/services/game.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {
  categories$;
  game={};
  id;

  constructor(categoryService: CategoryService,
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.gameService.get(this.id)
        .subscribe(g => this.game = g);
  }

  save(game) {
    if (this.id)
      this.gameService.update(this.id, game);
    else
      this.gameService.create(game);

    this.router.navigate(['/admin/games']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this game?'))
      return;

    this.gameService.delete(this.id);
    this.router.navigate(['/admin/games']);
  }
}