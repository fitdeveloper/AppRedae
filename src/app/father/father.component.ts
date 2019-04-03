import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }

  nameEventHander($event: any) {
    this.userName = $event;
  }

  getData() {
    console.log(this.userName);
  }

}
