import { BlockUIModule } from 'ng-block-ui';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../share/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    BlockUIModule.forRoot()

  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
