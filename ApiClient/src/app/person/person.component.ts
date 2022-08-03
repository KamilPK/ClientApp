import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  public person: Person[];

  constructor(private personservice: PersonService) { };
  
  ngOnInit(): void {
    console.log(environment.backendUrl);
    console.log("person works");
    this.getPersons();
  }

  getPersons(){
    this.personservice.getData().subscribe((data: Person[]) => {  
      console.log(" inside subcription")    
      this.person = data;      
    })

  }



}
