import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import { Registration } from '../../model/registration.model';

@Injectable({
    providedIn: 'root'
  })
  export class RegistrationService {
  
    private SERVER_URL: string = "https://localhost:44377/Registration";
  
    constructor(private http: HttpClient) { }
  
    getUsers() {
      return this.http.get<Registration[]>(this.SERVER_URL);
    }
  
  
    saveUser(data: Registration) {
      return this.http.post(this.SERVER_URL+'user', data);
    }
  
    updateUser(data:Registration) {
      return this.http.put(this.SERVER_URL + 'user/'+data.id, data);
    }
  
    
    getUser(id:Number) {
      return this.http.get<Registration>(this.SERVER_URL + 'user/'+id);
    }
  
    deleteUser(id:Number) {
      return this.http.delete(this.SERVER_URL +'user/'+id);
    }
  }
  