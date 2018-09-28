
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../share/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,

  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
