import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './model/MenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  public menuItems : MenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
