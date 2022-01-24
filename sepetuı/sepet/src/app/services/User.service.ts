import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../Models/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpClient: HttpClient, private router:Router) { }
path="https://localhost:5001/User";
user:User;
id:any;
formdata=User
getuser():Observable<User[]>{
  return this.httpClient.get<User[]>(this.path);

}
add(user){
 return this.httpClient.post(this.path,user);
  
}
delete(id:number){
  return this.httpClient.delete(`${this.path}?UserId=${id}`)
}
}
