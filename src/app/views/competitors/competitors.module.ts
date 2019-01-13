import { NgModule } from '@angular/core';
import { CompetitorListComponent } from './competitor-list/competitor-list.component';
import { ComponentViewComponent } from './competitor-view/competitor-view.component';
import { CompetitorsRoutingModule } from './competitors-routing.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCompetitorsStore from './store';
import { EffectsModule } from '@ngrx/effects';
import { CompetitorsEffects } from './store/effects/competitors.effects';
import { CompetitorItemComponent } from '../../core/components/competitor-item/competitor-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompetitorsService } from './services/competitors.service';
import { MaterialModule } from '../../core/modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CompetitorsRoutingModule,
    StoreModule.forFeature('competitors', fromCompetitorsStore.reducers),
    EffectsModule.forFeature([CompetitorsEffects])
  ],
  declarations: [
    CompetitorListComponent,
    ComponentViewComponent,
    CompetitorItemComponent
  ],
  providers: [
    CompetitorsService
  ]
})
export class CompetitorsModule {}
