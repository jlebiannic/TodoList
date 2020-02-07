import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MenuItem } from './model/MenuItem';
import { Observable, Subscription } from 'rxjs';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input()
  public menuItems : MenuItem[];
  public activeId: number = 0;
  public currentPath$ : Observable<any[]>;
  sub: Subscription;
  constructor(private menuService : MenuService) { 
    this.currentPath$ = this.menuService.getPath();
  }
  
  ngOnInit() {
    this.sub = this.currentPath$.subscribe((path: any[])=>
      this.activeId = this.getActiveId(path))
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
  }

  public getActiveId(path: any[]) : number{
    if(!path || path.length === 0) {
      path = [window.location.pathname];
    }
    return  this.menuItems.findIndex(p => p.path === path[0]) + 1
  }

}
