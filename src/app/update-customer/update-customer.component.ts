import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VansserviceService} from '../vansservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'phonenumber':new FormControl('',Validators.required),
    'size':new FormControl('',Validators.required),
    'colour':new FormControl('',Validators.required),
    'details':new FormControl('',Validators.required),
    'price':new FormControl('',Validators.required)


  });

  constructor(private service:VansserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {
    this.service.getOneCustomer(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res,'res==>');
      this.customerForm.patchValue({
          name:res.data[0].name,
          phonenumber:res.data[0].phonenumber,
          size:res.data[0].size,
          colour:res.data[0].colour,
          details:res.data[0].details,
          price:res.data[0].price
      });
    });
}
//to update a order
customerUpdate()
{
console.log(this.customerForm.value);
  this.service.updateCustomer(this.router.snapshot.params['id'], this.customerForm.value).subscribe((result:any)=>{

  this.customerForm.reset();
  this.message = true;

  });
}
removeMessage(){
this.message = false;
}
}
