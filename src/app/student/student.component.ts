import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() firstName: string;
  @Output() change = new EventEmitter();
  student = {
    firstName: 'Soumya' ,
    lastName: 'Banerjee',
    score: 20
  };

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.change.emit(this.student);
  }
}
