import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private ds: DataService) { }
  friends: any;

  ngOnInit(): void {
    this.ds.getFriends().subscribe(x => this.friends=x.allfriends)
  }

}
