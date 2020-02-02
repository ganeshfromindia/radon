import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'pass': new FormControl(null, [Validators.required])
      }),
    });  
  }
  onSubmit() {
	console.log(this.loginForm);
	this.loginForm.reset();
	this.authService.login();
	this.router.navigate(['/customers']);
	
  }
}
