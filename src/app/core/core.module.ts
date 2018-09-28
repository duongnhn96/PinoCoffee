import { AuthenticationGuard } from './service/authentication.guard';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [   ],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthenticationGuard
      ]
    };
}
 }
