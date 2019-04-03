import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() nameEvent = new EventEmitter<string>();


  userName = '';

  constructor() { }

  ngOnInit() {
  }

  onNameChange () {
    this.nameEvent.emit(this.userName);
  }

}
