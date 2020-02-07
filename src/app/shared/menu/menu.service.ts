import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private path$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private router : Router) { 

  }

  public getPath(): Observable<any[]> {
    return this.path$.asObservable()
  }

  public navigate(path : any[]){
    this.path$.next(path);
    this.router.navigate(path);
  }

}
