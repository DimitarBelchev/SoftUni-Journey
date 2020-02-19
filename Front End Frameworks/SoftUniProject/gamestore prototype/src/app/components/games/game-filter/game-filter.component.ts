import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'app/services/category.service';



@Component({
  selector: 'game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent {

  categories$;
  @Input('category') category: string;

  constructor(categoryService: CategoryService, ) {
    this.categories$ = categoryService.getAll();
  }

}
