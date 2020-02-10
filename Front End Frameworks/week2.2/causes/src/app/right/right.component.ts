import { Component, OnInit } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  get selectCause() { return this.causesService.selectedCause; }

  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }

}
