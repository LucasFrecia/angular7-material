import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatSelectModule,
        MatProgressBarModule,
        MatAutocompleteModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    MatAutocompleteModule,
    MatSnackBarModule,
    MatDividerModule,
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
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
