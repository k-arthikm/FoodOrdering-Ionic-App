import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CommonServiceService } from '../services/common-service.service';


@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.scss'],
})
export class FoodmenuComponent implements OnInit {

  public items = [];
  public name: string;
  public price: number;
  constructor(private menu: MenuController, private httpObj: HttpClient,private service:CommonServiceService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  /**
   * name
   */
  public openMenu() {
    console.log("In openFirst")
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //   openFirst() {
  //     this.menu.enable(true, 'first');
  //     this.menu.open('first');
  //  }


  // async function openMenu() {
  //   await menuController.open();
  // }

  // var url: string = "http://localhost/food-ordering-system-master/api/food-menu-api.php";

  public getMenuItems() {
    //var url: string = "http://localhost/food-ordering-system-master/api/food-menu-api.php";
    var url: string="food-menu-api.php";

   // this.httpObj.get<any>(url).subscribe(data => {
    this.service.serviceCallGet(url).subscribe(data => {
      console.log("data:: ", data);
      this.items = data;

      this.items.map(x => {
        if (x.deleted == 0) {
          x.checked = true;
        } else {
          x.checked = false;
        }

      });
    });
  }
  public modify() {
    console.log(this.items);

    this.items.map(x => {
      if (x.checked == true) {
        x.deleted = 0;
      } else {
        x.deleted = 1;
      }
    })
    console.log("before http::", this.items)
    var url: string = "update-item-api.php";
    this.service.serviceCallPost(url, { mdata: this.items }).subscribe(data => {
      console.log("mdata::", data);

    });

  }


  /**
   * name
   */
  public add(name, price) {
    this.name = name;
    this.price = price;

    console.log("name::", name);
    console.log("price::", price);

    //var url: string = "http://localhost/food-ordering-system-master/api/add-item-api.php"
    var url: string="add-item-api.php";
    //this.httpObj.post<any>(url, { name: this.name, price: this.price }).subscribe(data => {
      this.service.serviceCallPost(url, { name: this.name, price: this.price }).subscribe(data => {
      console.log(data);

      var obj = { id: data.id, name: this.name, price: this.price, deleted: "0", checked: true };
      console.log(this.items);
      this.items.push(obj);


    });

  }


}
