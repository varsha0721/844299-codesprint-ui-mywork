import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { Formdata } from "src/app/model/from";

@Component({
  selector: 'app-giftorder',
  templateUrl: './giftorder.component.html',
  styleUrls: ['./giftorder.component.css']
})
export class GiftorderComponent implements OnInit {



  constructor(private formbuilder: FormBuilder) { }

  placeOrder = this.formbuilder.group({
    inr:[null,[Validators.required]],
    paise:[null,[Validators.required,Validators.max(99)]],
    fname1:[null,[Validators.required]],
    lname1:[null,[Validators.required]],
    street:[null,[Validators.required]],
    city:[null,[Validators.required]],
    state:[null,[Validators.required]],
    country:[null,[Validators.required]],
    pincode:[null,[Validators.required]],
    fname2:[null,[Validators.required]],
    lname2:[null,[Validators.required]],
    email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:[null,[Validators.required]]
   

  })

  data = new Formdata(0,0,' ',' ' ,' ',' ',' ',' ', ' ', ' ', ' ', '@gmail.com ', 0);

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data);
  }

  getdata(data)
  {
    console.log(data);
    if(localStorage.Box == undefined)
    {
      const field=[];
      field.push(data);
      localStorage.Box =JSON.stringify(field);
    }

    else{
      const place = JSON.parse(localStorage.Box);
      place.push(data);
      localStorage.Box = JSON.stringify(place);
    }
  }

}
