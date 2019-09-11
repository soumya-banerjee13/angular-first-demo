import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }
  navs = ['Login', 'Home', 'Some Page'];
  bgcolor = environment.navbarcolor;

  ngOnInit() {
  }
  gotoPage() {
    this.router.navigate(['/showPipes', 2]);
  }
}
