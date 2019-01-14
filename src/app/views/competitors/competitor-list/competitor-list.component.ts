import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../../core/models/competitor';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../store';
import { ComponentViewComponent } from '../competitor-view/competitor-view.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-competitor-list',
  templateUrl: './competitor-list.component.html',
  styleUrls: ['./competitor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CompetitorListComponent extends ComponentViewComponent implements OnInit {
  competitors$: Observable<Competitor[]>;

  constructor(public store: Store<fromCompetitorsStore.State>, public dialog: MatDialog) {
    super(store);
  }

  openImageDialog() {
    const dialogRef = this.dialog.open(ComponentViewComponent);
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
