import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MaxLengthValidator } from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  userForm=this.fb.group({
    name:[null,[Validators.required]],
    email:[null,Validators.required,Validators.email],
    message:[null,Validators.required]
 
  })
    ngOnInit(): void {
    }
  
    onSubmit(data){
      console.log(data)
    }
  }

