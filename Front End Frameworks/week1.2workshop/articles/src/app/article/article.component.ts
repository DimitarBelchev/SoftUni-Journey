import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  symbols = 250;
  visibleDescriptionLength = 0;
  showImage = true;

  get hasNoMoreInfo() {
    return this.description.length < this.visibleDescriptionLength;
  }
  get description() {
    return this.article.description.slice(0, this.visibleDescriptionLength);
  }

  constructor() { }

  hideDescription() {
    this.visibleDescriptionLength = 0;
  }
  readMore() {
    if (this.description.length < this.visibleDescriptionLength) { return; }
    this.visibleDescriptionLength += this.symbols;
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  }

}

// export class ArticleComponent{
//   private symbols: number = 250;
//   @Input() article: Article;
//   @Input() articleDesc: string;
//   descToShow: string;
//   articleDescLen: number;
//   showReadMoreBtn: boolean = true;
//   showHideBtn : boolean = false;
//   imageIsShown: boolean = false;
//   imageButtonTitle: string = "Show Image"
// }
