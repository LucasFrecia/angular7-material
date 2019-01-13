

import {RouterModule, Routes} from '@angular/router';
import {CompetitorListComponent} from './competitor-list/competitor-list.component';
import {ComponentViewComponent} from './competitor-view/competitor-view.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CompetitorListComponent
  },
  {
    path: 'edit/:Id',
    component: ComponentViewComponent
  },
  {
    path: 'new',
    component: ComponentViewComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CompetitorsRoutingModule {}
