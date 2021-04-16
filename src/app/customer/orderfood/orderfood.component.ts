import { CommonServiceService } from './../../services/common-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderfood',
  templateUrl: './orderfood.component.html',
  styleUrls: ['./orderfood.component.scss'],
})
export class OrderfoodComponent implements OnInit {

  constructor(private service: CommonServiceService,private router: Router) { }
  public items = [];

  ngOnInit() {
    this.getItemList();
  }


  /**
   * getItemList
   
  var url: string = "http://localhost/food-ordering-system-master/api/item-list-api.php";*/
  public getItemList() {
    var url: string = "item-list-api.php";
    this.service.serviceCallGet(url).subscribe((data: any) => {
      console.log(data);
      this.items = data;
    });

  }

  public order() {
    console.log(this.items);//new data
    var obj = [];
    this.items.map(x => {
      if (x.quantity != null) {
        obj.push(x);
        console.log(obj);
        //localStorage.setItem("oitems", JSON.stringify(obj));//not required here
      }

    });
    localStorage.setItem("oitems", JSON.stringify(obj));
    this.router.navigate(['/customer/app-orderdetails']);
  }



}

