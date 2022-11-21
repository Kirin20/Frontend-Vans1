import { Component, OnInit } from '@angular/core';
import { VansserviceService } from '../vansservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:VansserviceService) { }


  listData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllCustomer();

    // this.service.getAllCustomers().subscribe((res)=>{
      // console.log(res,"res==>");
       //this.listData = res.data;
     //});
   }
 
   //get delete id
   deleteId(id:any){
     console.log(id,'deleteid==>');
     this.service.deleteCustomer(id).subscribe((res)=>{
       console.log(res,'deleteres==>');
       this.successmsg = res.message;
       this.getAllCustomer();
 
     });
 
   }
 
   //get customer
   getAllCustomer(){
 
     this.service.getAllCustomer().subscribe((res)=>{
       console.log(res,"res==>");
 
       this.listData = res.data;
     });
 
   }
 
 }
 


