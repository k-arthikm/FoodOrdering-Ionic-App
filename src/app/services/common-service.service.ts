import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpObj: HttpClient) { }

  public domainurl: string = "http://localhost/food-ordering-system-master/api/";

  //url+update-item-api.php

  /**
   * name
   */
  public serviceCallPost(url, input) {
    ///this.domainurl+url;
    return this.httpObj.post<any>(this.domainurl + url, input);
  }

  public serviceCallGet(url) {
    ///this.domainurl+url;
    return this.httpObj.get<any>(this.domainurl + url);
  }

  public calculateTotal(item) {
    // console.log("item::",item);
    let total = 0;
    if (item != undefined) {

      item.map(x =>
        total = parseInt(x.price) + total);

    }

    return total;

  }

}
