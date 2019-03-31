import { Component, OnInit } from '@angular/core';
import { SearchService } from '../test/search.service';
import { HttpClient } from 'selenium-webdriver/http';
import { data } from '../test/newin';
@Component({
  selector: 'app-hk',
  templateUrl: './hk.component.html',
  styleUrls: ['./hk.component.css']
})
export class HkComponent implements OnInit {
  datas: data[];
  seldata : data = { id:null, names:null, region:null, place:null};
  constructor(private readapi:SearchService) { }

  ngOnInit() {
    console.log("working");
    this.readapi.read().subscribe((datas:data[]) => {
      this.datas = datas;
      console.log(this.datas);
    })

  }

}
