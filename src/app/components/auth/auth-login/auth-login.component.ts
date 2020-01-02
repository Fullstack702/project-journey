import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css', '../auth.component.css']
})
export class AuthLoginComponent implements OnInit {
  type: FormGroup;
  pwdError = false;
  togglePwd = true;

  constructor(private formBuilder: FormBuilder, private util: UtilsService) {}

  ngOnInit() {
    this.type = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    if (this.type.valid) {

      this.util.ApiLogin(this.type.value, success => {
        
        this.util.Navigate('/app/projects');

      }, error => {
        
        console.log(error);
        this.pwdError = true;
      });
      
    }
  }
}
