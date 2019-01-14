import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSelectModule,
        MatProgressBarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatDialogModule,
    MatSlideToggleModule
  ],
  declarations: [],
  exports: [
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
