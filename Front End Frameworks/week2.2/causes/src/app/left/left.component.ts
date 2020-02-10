import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from '../shared/interfaces/cause';
import { CausesService } from '../causes.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  get causes() { return this.causesService.causes; }

  constructor(private causesService: CausesService) { }


  ngOnInit() {
    this.causesService.loadCauses();
  }

  selectCauseHandler(cause: ICause) {
    this.causesService.selectedCause = cause;
  }
}
