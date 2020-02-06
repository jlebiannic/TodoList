import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateDuJourComponent } from './shared/date-du-jour/date-du-jour.component';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { AccueilDemoComponent } from './accueil/accueil-demo/accueil-demo.component';
import { AccueilModule } from './accueil/accueil.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TodoModule,
    AccueilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
