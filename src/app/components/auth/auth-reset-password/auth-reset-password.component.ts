import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.css', '../auth.component.css']
})
export class AuthResetPasswordComponent implements OnInit {

  toggleNewPwd = true;
  toggleRptPwd = true;
  pwdError = false;
  tokenError = false;
  success = false;
  type: FormGroup;
  token: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private util: UtilsService) {}

  ngOnInit() {
    this.type = this.formBuilder.group({
      newPassword: ['', Validators.required],
      verifyPassword: ['', Validators.required]
    });

    this.token = decodeURI(this.route.snapshot.queryParamMap.get('token'));
    this.router.navigate([], {
      queryParams: {
        token: null,
      },
      queryParamsHandling: 'merge'
    });
  }

  setNewPwd() {

    if (this.type.value.newPassword !== this.type.value.verifyPassword) {
      this.pwdError = true;
    } else {
      

      var data = {
        newPassword: this.type.value.newPassword,
        verifyPassword: this.type.value.verifyPassword,
        token: this.token
      };

      this.util.ApiResetPassword(data, scb => {
        this.success = true;
        
        setTimeout(() => {
          this.util.Navigate('/auth/login');
        },2000)

      }, error => {
        console.log(error);
        this.tokenError = true;
      });
    }
  }
}
