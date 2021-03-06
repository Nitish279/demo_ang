import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-reports-sidebar',
  templateUrl: './reports-sidebar.component.html',
  styleUrls: ['./reports-sidebar.component.css']
})

@Injectable()
export class ReportsSidebarComponent implements OnInit {
  public sidebarData: any;
    constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => {
           obj = data;
           this.sidebarData = obj.reports;
          //  console.log(obj);
          });
        //  console.log(obj);
    }

    public getJSON(): Observable<any> {
         return this.http.get('../../../../assets/mock-data/reports.json').map((res: any) => res.json());
     }

     ngOnInit() {}
}
