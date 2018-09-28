import { AuthenticationGuard } from './core/service/authentication.guard';
import { DetailComponent } from './layout/detail/detail.component';
import { MenuComponent } from './layout/menu/menu.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LaunchScreenComponent} from './layout/launch-screen/launch-screen.component';
import { OnboardingComponent } from './layout/onboarding/onboarding.component';
import { OrdercoffeeModule } from './ordercoffee/ordercoffee.module';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'launch',
    component: LaunchScreenComponent
  },
  {
    path: '',
    component: OnboardingComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  }
  ,
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'order',
    canActivate: [AuthenticationGuard],
    loadChildren: 'src/app/ordercoffee/ordercoffee.module#OrdercoffeeModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
