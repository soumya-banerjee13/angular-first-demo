import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  person = {
    firstname: 'Soumya',
    lastname: 'Banerjee'
  };
  title = 'demo-first-app';
  changeName() {
    this.person = {
      firstname: 'Foo',
      lastname: 'Cooper'
    };
  }
}
