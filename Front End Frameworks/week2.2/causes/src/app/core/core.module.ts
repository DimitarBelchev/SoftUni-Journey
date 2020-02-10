import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftComponent } from '../left/left.component';
// import { RightComponent } from '../right/right.component';
// import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavigationComponent,
    LeftComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    LeftComponent,

  ]
})
export class CoreModule { }
