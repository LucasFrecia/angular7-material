import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { LoadingService } from '../services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [],
  exports: [
    MaterialModule,
  ],
  providers: [
    LoadingService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: 'loading', useClass: LoadingService }]
    };
  }
}
