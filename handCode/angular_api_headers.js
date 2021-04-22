import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http'; 

import { Headers } from '@angular/http';

@Component({
	
  selector: 'app-authentication',

	templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']

})


export class AuthenticationComponent implements OnInit {
  user = {
    username: '',
    password: ''
  }
  
  private httpOptions = {
	  headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
	  };
  
  @Input() token;
  @Output() tokenChange = new EventEmitter<string>();

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  
  auth() {  	
	  let body = new HttpParams()
		.set('username', this.user.username)
		.set('password', this.user.password);
    this.http.post('http://*********.*********.com/two/wp-json/jwt-auth/v1/token', body, this.httpOptions).subscribe((data) => {
      if (data['token']) {
        this.token = data['token'];
        this.tokenChange.emit(this.token);
      }
    });
  }

  
  /**auth() {  
    this.http.post('http://*********.*********.com/two/wp-json/jwt-auth/v1/token', {
      username: this.user.username,
      password: this.user.password
    }, {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).subscribe((data) => {
      if (data['token']) {
        this.token = data['token'];
        this.tokenChange.emit(this.token);
      }
    });
  }*/

}
