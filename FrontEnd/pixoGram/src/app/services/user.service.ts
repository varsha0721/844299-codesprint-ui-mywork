import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { FollowModel } from '../models/follow.model';
import { UpdateModel } from '../models/update.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://localhost:8000/user';

  private followUrl='http://localhost:9000/follow';

  constructor(private http: HttpClient) { }
  
  firstName: String;
  username: String;
  id: Number;
  email: String;

  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  getUserByName(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  getLoginByName(username: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/login/${username}`);
  }
  
  createUser(user: UserModel): Observable<Object> {
    console.log(user)
    return this.http.post(`${this.baseUrl}/create`,user);
  }

  follow(follow:FollowModel): Observable<Object> {
    return this.http.post(`${this.followUrl}`+`/create`,follow);
  }

  getFollowing(userid: number): Observable<Object>{
    return this.http.get(`http://localhost:9000/follow/following/`+`${userid}`)
  }

  getFollower(userid: number): Observable<Object>{
    return this.http.get(`http://localhost:9000/follow/follower/`+`${userid}`)
  }
 
  updateUser(user: UpdateModel,userid:number): Observable<Object> {
    return this.http.put(`${this.baseUrl}`+`/update/`+`${userid}`,user);
  }
}

