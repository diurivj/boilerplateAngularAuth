import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  url = 'http://localhost:3000/';

  constructor(private http: Http) { }

  signupService(auth){
    return this.http.post(this.url + 'signup', auth)
    .pipe(map((res: Response) => res.json()))
  }
}
