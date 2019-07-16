import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http: HttpClient) { }

  public submitEmailForm(form): Observable<{response: string}> {
    console.log("Coffee Service");
    console.log(form);
    return this.http.post<{ response: string }>('http://localhost:7072/api/CoffeeHttpTrigger', form)
      ;
  }


}

// export interface ResponseInterface {
//   response: string;
// }
