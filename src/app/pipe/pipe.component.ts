import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }



  pipeDisplay = {
    title: 'Angular 8',
    rating: 4.8657,
    students: 19,
    price: 2.3
  };
  largeText = 'There is no one who loves pain itself, who seeks after it and wants to have it , simply because it is pain';
  smallText = 'Here I am';
  postID: any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.postID = +params.get('id');
      console.log(this.postID);
    });
  }
}
