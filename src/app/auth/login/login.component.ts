import { Router } from '@angular/router';
import { AuthenticationService } from './../../core/service/authentication.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private builder: FormBuilder , private router: Router, private authenticationService: AuthenticationService) { }
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });
  error = false;
  ngOnInit() {
  }
  login () {
    this.blockUI.start('Loading...');
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((value: any) => {
      localStorage.setItem('userToken', value.token as string);
      this.router.navigate(['/order/table']);
      this.blockUI.stop();
    }, err => {
      this.error = true;
      this.blockUI.stop();
    });
  }

}
