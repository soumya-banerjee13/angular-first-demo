import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  styleUrls: ['./change-detection.component.css'],
  template: `<p>change-detection works!</p>
  <h2>
      Hey {{person.firstname}} {{person.lastname}} !
  </h2>
  <p>{{runChangeDetection}}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {

  @Input() person: any;

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.person.subscribe(() => {
      this.cd.markForCheck();
    });
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}
