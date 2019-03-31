import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SearchService } from './test/search.service';
import { Test } from './test/newin';

declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('dataTable') table:ElementRef;
  dataTable: any;
  dtOption: any = {};
  name:string = '';
  age:number;

    ngOnInit(): void {
     

    }

  }
