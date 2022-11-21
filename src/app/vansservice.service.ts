import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseCustomerUrl = "http://localhost:8080/customer"
const CreateCustomerUrl = "http://localhost:8080/customer/add"
const delCustomerUrl = "http://localhost:8080/customer/del"
const putCustomerUrl = "http://localhost:8080/customer/put"

@Injectable({
  providedIn: 'root'
})
export class VansserviceService {

 
  

  constructor(private _http:HttpClient) { }
  //to connect the frontend to backend
//get all order
getAllCustomer():Observable<any>{
  const url = "http://localhost:8080/allcustomer"
  return this._http.get<any>(url)
}

 // create customer
 createCustomer(customer: any):Observable<any>{
  console.log(customer,'createvans=>');
  return this._http.post(CreateCustomerUrl, customer)
}

//deleting customer

deleteCustomer(id: any): Observable<any> {
  return this._http.delete(`${delCustomerUrl}/${id}`);

}

//update customer
updateCustomer(id: any, customer: any): Observable<any> {
  return this._http.put(`${putCustomerUrl}/${id}`, customer);

}

//get one customer
getOneCustomer(id:any):Observable<any>{
  return this._http.get(`${baseCustomerUrl}/${id}`);
}

}