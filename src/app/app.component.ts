import { Component } from '@angular/core';
import { MenuItem } from './shared/menu/model/MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuItems : MenuItem[] = [
    new MenuItem("/Accueil", "Accueil"),
    new MenuItem("/TodoList", "Todo Liste"),
    new MenuItem("/Todo", "Ajouter une tâche")
  ]
  title : string = 'TodoListApp';
}
