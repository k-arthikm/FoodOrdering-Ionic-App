import { CommonServiceService } from './../services/common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public usersList: any[] = [];
  //public user = { "username": "", "email": "", "contact": "", "address": "", "role": "", "verfied": "", "deleted": "" };
public user = { "name": "","username": "", "email": "", "contact": "", 
"address": "", "role": "", "verified": "", "deleted": "","password":"" };





  //public dropdownOptions=["Administrator","Customer"];
  // public dropdownOptions=[{id:'Administrator',value:'Administrator',text:'Administrator',selected:'true'},
  // {id:'Customer',value:'Customer',text:'Customer',selected:'true'}];

  constructor(private service: CommonServiceService) { }

  ngOnInit() {
    this.getOutput();
  }

  public getOutput(): void {
    var url: string = "list-user-api.php";
    this.service.serviceCallPost(url, {}).subscribe((data: any) => {
      // console.log(data);
      this.usersList = data;
    });
  }

  public modifyUser() {
    console.log("usersList::", this.usersList);

    var url: string = "update-user-api.php";
    this.service.serviceCallPost(url, { mdata: this.usersList }).subscribe((data: any) => {

      console.log(data);

      if (data.result == "success") {
        alert("Record Modifed Successfully");
      } else {
        alert("Record failed to modify!");
      }


    });




  }

  public addUser(user):void{
    console.log("start::",user)
    var url: string = "add-user-api.php";


    this.service.serviceCallPost(url, user).subscribe((data: any) => {

      console.log(data);

      if (data.result == "success") {
        alert("Record Modifed Successfully");
      } else {
        alert("Record failed to modify!");
      }


    });

}
}
