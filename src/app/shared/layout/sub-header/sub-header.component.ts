import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  public subHeaderData: any;
  constructor(private http: Http) {
    var obj;
    this.getJSON().subscribe(data => {
      obj = data;
      this.subHeaderData = obj.left_nav_content;
      // console.log(this.subHeaderData);
     });
   //  console.log(obj);
}

public getJSON(): Observable<any> {
    return this.http.get('../../../../assets/mock-data/mock_data.json').map((res: any) => res.json());
}

  ngOnInit() {
  }
  // transformLeftNavData = (event: any) => {
  //   console.log(event);
  // }
}
