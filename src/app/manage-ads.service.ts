import { Ad } from './ad';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManageAdsService {

  url = "http://localhost:3000/Ads";

  constructor(private http: HttpClient) { }

}
