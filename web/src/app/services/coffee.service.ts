import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private cups: number;

  constructor(private http: HttpClient) { }

  public submitEmailForm(form): Observable<{response: string}> {
    console.log("Coffee Service");
    console.log(form);
    return this.http.post<{ response: string }>('http://localhost:7072/api/CoffeeHttpTrigger', form)
      ;
  }

  public getCups(): number {
    console.log("[CoffeeService] Current value of cups is: "+this.cups);
    return this.cups;
  }

  public setCups(val: number) {
    console.log("[CoffeeService] Cups has been updated to: " + val);
    this.cups = this.cups + val;
    this.getCups();
  }


}

// export interface ResponseInterface {
//   response: string;
// }
