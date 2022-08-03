import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  url: string;
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'https://localhost:7138',      
      'Content-Type': 'application/json'
    })    
  };
  constructor(
    private http: HttpClient,
    private router: Router
    ) 
    {
      this.url = environment.backendUrl; 
    }


  public getData(){    
    console.log("get data")
    return this.http.get<Person[]>(this.url+'person', this.httpOptions).pipe();
    
  }
}
