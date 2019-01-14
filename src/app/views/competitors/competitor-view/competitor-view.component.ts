import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Competitor } from '../../../core/models/competitor';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../store';
import * as competitorsActions from '../store/actions/competitors.actions';
import { DestroySubscribers } from '../../../core/decorators/destroy-subscribers.decorator';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { popin } from '../../../core/animations/animations';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-competitor-view',
  templateUrl: './competitor-view.component.html',
  styleUrls: ['./competitor-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popin]
})

@DestroySubscribers()
export class ComponentViewComponent implements OnInit, OnDestroy {

  @ViewChild('form') form: NgForm;

  competitors$: Observable<Competitor[]>;
  private subscribers: any = {};
  public competitor: any = {};
  private competitorIds: string[];

  public isValidIdInput: boolean;

  competitorFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern( '^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}')
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(public store: Store<fromCompetitorsStore.State>) {

  }

  ngOnInit() {
    // subscribe to the store and select competitors array
    this.competitors$ = this.store.select(fromCompetitorsStore.getEntitiesArray);

    // populate localstorage
    this.subscribers.populateStorage$ = this.store
    .select(fromCompetitorsStore.getEntites)
    .subscribe(competitors => {
      this.competitorIds = Object.keys(competitors);
      localStorage.setItem('competitors_ids', JSON.stringify(this.competitorIds));
      localStorage.setItem('competitors', JSON.stringify(competitors));
    });
  }

  public addCompetitor(): void {
    this.competitor.Id = `${this.competitor.Id}`;
    this.competitor.MarcaId = +this.competitor.MarcaId;
    this.competitor.ZonaDePrecioId = +this.competitor.ZonaDePrecioId;

    const sendObject =  Object.assign({}, this.competitor);

    this.store.dispatch(new competitorsActions.AddCompetitor(sendObject));

    this.resetForm();
  }

  public updateCompetitor(competitor: Competitor): void {
    this.store.dispatch(new competitorsActions.UpdateCompetitor(competitor));
  }

  public deleteCompetitor(competitor: Competitor): void {
    const r = confirm('Are you sure?');
    if (r) {
      this.store.dispatch(new competitorsActions.DeleteCompetitor(competitor));
    }
  }

  public resetForm(): void {
    this.form.resetForm();
  }


  public idValidator(e: boolean): void {
    this.form.controls['Id'].setErrors({'incorrect': e});
    this.isValidIdInput = e;
  }

  ngOnDestroy() {
    // DO NOT ERASE METHOD, NEEDED FOR UNSUBSCRIPTIONS
  }
}
