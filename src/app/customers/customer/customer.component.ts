import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { interval  } from 'rxjs';
import { take } from 'rxjs/operators';

export class Customers { 
	name?:string;
	phone_number?: string;
	address?: string;
	email?: string;
	constructor(customers?)
    {
		customers = customers || {}; 
		this.name = customers.name || '';
		this.phone_number = customers.phone_number || '';
		this.address = customers.address || '';
		this.email = customers.email || '';
	}	
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customers;
  alteraddCustomer: FormGroup;
  page_scope: string;
  userRole: string;
  loader: boolean = false;
  showFormAddEdit: boolean = true;
  imagePath: string = 'assets/724.GIF';

  constructor(private router: Router,  private route: ActivatedRoute, private _formBuilder: FormBuilder,) { 
	this.customer = new Customers();
  }
  ngOnInit() {
   console.log(this.route);
   this.route.data
      .subscribe(
        (data: Data) => {
		  if (data['customer']) {
				this.customer = new Customers(data['customer'][0]);
				this.alteraddCustomer = this.createForm(this.customer);
				this.page_scope = 'Edit user';
				this.userRole = 'Update';
			 
		  }else {
			  this.customer = new Customers();
			  this.alteraddCustomer = this.createForm(this.customer);
			  this.page_scope = 'Add new user'; 
			  this.userRole = 'Register'; 
		  }
        }
      )	  
  }

  
  
      createForm(csdetails: Customers): FormGroup {
        return this._formBuilder.group({
            name: [{value:csdetails.name}, Validators.required],
            phone_number: [{value:csdetails.phone_number},Validators.required],
            address: [{value:csdetails.address}],
            email: [{value:csdetails.email} ],
        });
    }
	onSubmit() {
		this.showFormAddEdit = false;
		this.loader = true;
		const numbers = interval(4000);
		
		const data = this.alteraddCustomer.getRawValue();
		if(this.userRole == 'Register') {
			console.log(data);
			numbers.pipe(take(1)).subscribe(x => {console.log('Next: ', x); this.loader= false; this.showFormAddEdit = true;this.showmessage("Successfully added");})
		}else {
			console.log(data);
			numbers.pipe(take(1)).subscribe(x => {console.log('Next: ', x); this.loader= false; this.showFormAddEdit = true; this.showmessage("Successfully Updated");})
		}
	}
	
	showmessage(message) {
		alert(message);
	}
}
