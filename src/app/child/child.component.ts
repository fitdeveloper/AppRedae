import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Test} from '../TEST/Test';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() nameEvent = new EventEmitter<Test>();
  test: Test;

  constructor() {
    this.test = new Test();
  }

  ngOnInit() {
  }

  onNameChange() {
    this.nameEvent.emit(this.test);
  }

}
