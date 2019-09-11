import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  studentList = [
    {
    firstName: 'Soumya' ,
    lastName: 'Banerjee',
    score: 50
    },
    {
      firstName: 'Ashish',
      lastName: 'Sarkar',
      score: 20
    }
  ];

  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  deleteJsonData(obj: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts' + '/' + obj.id);
  }
}
