import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

/**
 * Service used to fecth Async informations about the user
 *
 * @export
 * @class AppService
 */
@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  fetchInformations(): Observable<User> {
    return this.http.get('assets/data/data.json').pipe(
      map(response => response as User)
    );
  }

  getUserFacebook(): Observable<string> {
    return this.http.get('assets/data/data.json').pipe(
      map((response: any) => response.facebookId )
    );
  }



}
