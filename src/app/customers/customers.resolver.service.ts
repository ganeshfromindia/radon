import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class Customers { 
	id?:number;
	name?:string;
	phone_number?: number;
	address?: string;
	email?: string;
	constructor(customers?)
    {
	}	
}

@Injectable()
export class CustomersServiceResolver 
{
	customers: Customers[] = [];
	customersRes: Customers;
	csId: number;
	objcustomers: any;
 
	onDataChanged: BehaviorSubject<any>;
    routeParams: any;
    customer: any;
    
    oncustomerChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient)
    {
        
        // Set the defaults
        this.onDataChanged = new BehaviorSubject({});
        this.oncustomerChanged=new BehaviorSubject({});
    }

    

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
             return new Promise((resolve, reject) => {
    
                Promise.all([
                    this.buildCustomer(route.params.id)
                ]).then(
                    (abc) => {
                        resolve(abc);
                    },
                    reject
                );
            });

    }




    /**
     * Build customer
     *
     * @returns {Promise<any>}
     */
    buildCustomer(id): Promise<any>
    {
		
        return new Promise((resolve, reject) => {

		
			this.customers = [ { "id": 0 , "name": "Brijesh" , "phone_number": 8425031410, "address": "Pune", "email" : "xyz@abc.com" } , { "id" : 1 , "name": "Don" , "phone_number": 9769681471, "address": "Jaipur", "email" : "abc@xyz.com"  }  ];
			this.csId = id;
			this.customersRes =  this.customers.filter(x => x.id == this.csId)[0];
			resolve(this.customersRes);
			
			});

	}
/**
     * Get customer
     *
     * @returns {Promise<any>}
     */
    getcustomers(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.oncustomerChanged.next(false);
                resolve(false);
            }
            else
            {
                this.customer
            
                // this._httpClient.get(baseUrl +'/'+ this.routeParams.id)
                //     .subscribe((response: any) => {
             
                //         this.customer = response;
                //         this.oncustomerChanged.next(this.customer);
                //         resolve(response);
                //     }, reject);
            }
        });
    }



    /**
     * Add customer
     *
     * @param customer
     * @returns {Promise<any>}
     */
    addcustomer(customer): Promise<any>
    {
		return;
   }

    statusService(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/status/')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }


    getSuppliers(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/invoicesuse/')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getUnits(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/units/')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getTaxCode(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/taxcode/')
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }



}
