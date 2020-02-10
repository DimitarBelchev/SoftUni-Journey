import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { TodoService } from './todo.service';
import { fromEvent, pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
function fromFetch(url) {
  return new Observable((observer) => {
    fetch(url).then(res => {
      observer.next(res);
      observer.complete();
    }).catch(err => observer.error(err))
  });
}
// declare const data;
// console.log(data);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
  // changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements AfterViewInit {
  title = 'demo';
  // todoTitle = 'HELLO!'
  todo = {
    title: 'HELLO!'
  }

  @ViewChild('input', { static: false }) input: ElementRef;

  // constructor(todoService: TodoService) {
  // console.log(todoService)
  // todoService.loadTodos();
  //   setTimeout(() => {
  //     this.todo = { title: '456' },
  //       // this.todo.title = '456',
  //       this.title = '123';
  //   }, 5000);
  // }

  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup').pipe(map((e: KeyboardEvent) => (e.target as HTMLInputElement).value)
    ).subscribe(console.log)
  }
}
