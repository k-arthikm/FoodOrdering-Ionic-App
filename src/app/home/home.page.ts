import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private httpObj: HttpClient) {}


  public username:string;
  public password:string;


  /**
   * name
   */
  public  login(userName,password):void
  {
      var url:string  = "http://localhost/food-ordering-system-master/api/router-api.php";
      // this.httpObj.get(url).subscribe(  (resstr:any) =>
      // {          this.output = resstr;
      //     console.log(this.output)
      // });
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'});
    let options = { headers: headers };

      this.httpObj.post<any>(url, { username: userName, password: password},options).subscribe(data => {
        console.log("data:: ",data);

        if(data.result=="admin"){
          this.router.navigate(['admin']);
        }else if(data.result=="customer"){
          localStorage.setItem("userId_token",data.user_id);
          this.router.navigate(['customer']);
        }else 
        alert("Login Failed!");

      });
  }

}
