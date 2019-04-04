import { Component, OnInit } from '@angular/core';
import {Test} from '../TEST/Test';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  userName = '';
  test: Test;

  constructor() { }

  ngOnInit() {
  }

  nameEventHander($event: any) {
    this.test = $event;
  }

  getData() {
    console.log(this.test);
  }

}
