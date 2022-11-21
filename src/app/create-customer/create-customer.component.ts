import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { VansserviceService} from '../vansservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private service:VansserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;


  ngOnInit(): void {

     //id for update 
     this.getparamid = this.router.snapshot.paramMap.get('id');
     if (this.getparamid){
     this.service.getOneCustomer(this.getparamid).subscribe((res)=>{
 
       console.log(res,'res==>');
       this.customerForm.patchValue({
           name:res.data[0].name,
           phonenumber:res.data[0].phonenumber,
           size:res.data[0].size,
           colour:res.data[0].colour,
           details:res.data[0].details,
           price:res.data[0].price,
       });
     });
  }
}

customerForm = new FormGroup({
  'name':new FormControl('',Validators.required),
  'phonenumber':new FormControl('',Validators.required),
  'size':new FormControl('',Validators.required),
  'colour':new FormControl('',Validators.required),
  'details':new FormControl('',Validators.required),
  'price':new FormControl('',Validators.required),
});

//to create customer
customerSubmit(){
  if(this.customerForm.valid){
    console.log(this.customerForm.value);
    this.service.createCustomer( this.customerForm.value ).subscribe((res)=>{
      console.log(res,'res==>');
      this.customerForm.reset();
      this.successmsg = res.message;
    });

  }
  else{
    this.errormsg = 'all field is required';
  }

}
//to update a customer
customerUpdate()
{
console.log(this.customerForm.value,'updatedform');

if(this.customerForm.valid)
{
  this.service.updateCustomer(this.customerForm.value,this.getparamid).subscribe((res)=>{
    console.log(res,'resupdated');
    this.successmsg = res.message;

  })
}
else
{
  this.errormsg = 'all field is required';
}
}
}
