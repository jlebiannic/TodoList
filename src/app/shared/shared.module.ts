import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDuJourComponent } from './date-du-jour/date-du-jour.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DateDuJourComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[DateDuJourComponent,
    NgbModule]
})
export class SharedModule { }
