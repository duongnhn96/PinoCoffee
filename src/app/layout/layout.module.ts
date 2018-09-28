import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchScreenComponent } from './launch-screen/launch-screen.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LaunchScreenComponent
  ],
  declarations: [LaunchScreenComponent, OnboardingComponent, MenuComponent, DetailComponent]
})
export class LayoutModule { }
