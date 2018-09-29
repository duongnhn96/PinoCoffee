import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
import { AuthenticationGuard } from './service/authentication.guard';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthenticationService,
        AuthenticationGuard
      ]
    };
}
 }
