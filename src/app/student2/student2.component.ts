import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Student2Component implements OnInit {
  @Input() studentList: any;

  fakeDeleteData(objPost) {
    this.service.deleteJsonData(objPost).subscribe(response => {
      const index = this.studentList.indexOf(objPost);
      this.studentList.splice(index, 1);
    });
  }

  constructor(private service: DemoService) { }

  ngOnInit() {
  }

}
