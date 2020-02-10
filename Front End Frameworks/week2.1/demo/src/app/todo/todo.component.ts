import { Component, OnInit, Input } from '@angular/core';

// class Car{
//   engine: any;
//   constructor(){
//     this.engine=new Engine();
//   }
// }

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: { title: string };

  constructor() { }

  ngOnInit(): void {
  }

}
