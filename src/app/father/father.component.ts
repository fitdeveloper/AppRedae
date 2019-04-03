import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  input: string;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    console.log(this.input);
  }

}
