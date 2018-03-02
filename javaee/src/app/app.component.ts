import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'javaee';
  dukes = [{name: "offline", age: 20 }, { name: "other", age: 50 }];

  constructor(public http: Http) {

  }

  ngOnInit() {
    this.http.get("http://localhost:8080/dukes/api/dukes")
      .toPromise().then(r => r.json()).then(r => this.dukes = r);
  }
}