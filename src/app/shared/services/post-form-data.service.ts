import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostFormDataService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    this.http.post('https://formsubmit.co/ajax/info@monicakrexa.com',data).subscribe(
      (val: any) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      (response:any) => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }

  
}
