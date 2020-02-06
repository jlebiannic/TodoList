import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-du-jour',
  templateUrl: './date-du-jour.component.html',
  styleUrls: ['./date-du-jour.component.scss']
})
export class DateDuJourComponent implements OnInit {

  public dateDuJour: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
