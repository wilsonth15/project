import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from "@angular/common/http";
import { Test , data} from './newin';
import { Observable } from 'rxjs';



@Injectable()
export class SearchService {
  constructor(private httpClient:HttpClient) { }

  PHP_API_SERVER = "localhost/Map/map/src/app/DB";

  read(): Observable<data[]>{
    return this.httpClient.get<data[]>(`${this.PHP_API_SERVER}/read.php`);
  }
  insert(test: Test): Observable<Test>{
    return this.httpClient.post<Test>(`${this.PHP_API_SERVER}/insert.php`, test);
  }
}
