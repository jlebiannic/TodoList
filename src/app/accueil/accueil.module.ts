import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilDemoComponent } from './accueil-demo/accueil-demo.component';



@NgModule({
  declarations: [AccueilDemoComponent],
  imports: [
    CommonModule
  ], exports:[AccueilDemoComponent]
})
export class AccueilModule { }
