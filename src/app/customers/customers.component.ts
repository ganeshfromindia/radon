import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class Customers { 
	name?:string;
	phone_number?: number;
	address?: string;
	email?: string;
	constructor(customers?)
    {
	}	
}



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customers[] = [];
  headElements:any;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
	  this.customers = [ { "name": "Brijesh" , "phone_number": 8425031410, "address": "Pune", "email" : "xyz@abc.com" } , {  "name": "Don" , "phone_number": 9769681471, "address": "Jaipur", "email" : "abc@xyz.com"  }  ];
	  console.log(this.customers);
	  this.headElements = ['SN', 'Name', 'Phone Number', 'Address', 'Email', 'Actions'];
	  
  }
  
  delCustomer(index) {
	this.customers.splice(index, 1);
  }
  
  editCustomer(index) {
	  this.router.navigate(['edit', index], {relativeTo: this.route });
  }
  
  addCustomer() {
	  this.router.navigate(['add'], {relativeTo: this.route });
  }
  
}
