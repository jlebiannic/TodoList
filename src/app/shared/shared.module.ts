import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDuJourComponent } from './date-du-jour/date-du-jour.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { MenuItem } from './menu/model/MenuItem';
import { AppRoutingModule } from '../app-routing.module';
import { MenuService } from './menu/menu.service';


@NgModule({
  declarations: [DateDuJourComponent, MenuComponent],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
  ],
  exports: [DateDuJourComponent, MenuComponent,
    NgbModule],
    providers: [MenuService]
})
export class SharedModule {


}
