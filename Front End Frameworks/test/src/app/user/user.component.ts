import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input("info") user: { name: string, age: number };
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {
    console.log('constructor')
    // console.log(this.info); // undefined

  }

  ngOnInit(): void {
    console.log("All inputs have been set!")
    // console.log(this.info)
  }

  deleteHandler() {
    this.delete.emit(this.user);
  }

}
