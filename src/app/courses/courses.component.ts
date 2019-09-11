import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service: DemoService) {

  }
  studentList: any;
  imgUrl = 'http://lorempixel.com/400/200/nature';
  isActive = true;
  courses = ['Java', 'Python', 'C++'];
  email2 = '';

  ngOnInit() {

    console.log(this.service.getJsonData());
    this.getDataFromService();
  }
  getDataFromService() {
    this.service.getJsonData().subscribe(response => {
      this.studentList = response;
      console.log(this.studentList);
    });
  }
  onSave($event) {
    $event.stopPropagation(); // Event of parent element will not be executed
    console.log('Button was clicked', $event);
  }
  onDivClick($event) {
    console.log('Div was clicked', $event);
  }
  onInputClicked(email) {
    console.log('Email: ' + email);
  }
  onInput2Clicked() {

  }
  changeFunction($event) {
    console.log('Event Emitted', $event.firstName);
  }
}
