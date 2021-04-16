import { CommonServiceService } from './../services/common-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss'],
})
export class AllordersComponent implements OnInit {

  constructor(private httpObj: HttpClient,private service:CommonServiceService,private route:ActivatedRoute) { }
  public orders=[];
  public status:string;

  ngOnInit() {
let status="";
this.route.queryParams.subscribe(params=>{
  status= params.status === undefined ? '' : params.status;
  console.log("status::",status);
  this.getAllOrders(status);
});
  

    
  }
  //var url:string  = "http://localhost/food-ordering-system-master/api/all-orders-api-m.php";

public getAllOrders(status){

  var url:string  = "http://localhost/food-ordering-system-master/api/all-orders-api-m.php";
  // this.httpObj.get(url).subscribe(  (resstr:any) =>
  // {          this.output = resstr;
  //     console.log(this.output)
  // });

  //comment n see
//   let headers = new HttpHeaders({
//     'Content-Type': 'application/json'});
// let options = { headers: headers };

  this.httpObj.post<any>(url, {status: status}).subscribe((data:any) => {
    //console.log(data);
    this.orders=data;
    // if(data.result=="admin"){
    //   this.router.navigate(['admin']);
    // }else if(data.result=="customer"){
    //   this.router.navigate(['admin']);
    // }else 
    // alert("Login Failed!");

  });
}

/**
 * name
 */
public calculateTotal(item) {
 // console.log("hereeeeee::",item);
  return this.service.calculateTotal(item);
  
}

/**
 * changeStatus
 */
public changeStatus(order) {
  var url: string = "edit-orders-api.php";

  this.service.serviceCallPost(url, { id: order.id, status: order.status}).subscribe((data: any) => {

  
  });

}
}
