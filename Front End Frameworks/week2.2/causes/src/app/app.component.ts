import { Component } from '@angular/core';
import { CausesService } from './causes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(causesService: CausesService) {
    causesService.loadCauses();
  }
}
