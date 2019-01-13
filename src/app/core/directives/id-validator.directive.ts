import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validator } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';
import {
  SimpleChanges,
  OnChanges
} from '@angular/core/src/metadata/lifecycle_hooks';
import { Store } from '@ngrx/store';
import * as fromCompetitorsStore from '../../views/competitors/store';

@Directive({
  selector: '[appIsValidCompetitorId]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IdValidatorDirective, multi: true }
  ]
})

export class IdValidatorDirective implements Validator, OnChanges {
  @Input('appIsValidCompetitorId') validId: boolean;
  @Output() emitIsValdID = new EventEmitter();

  private _onChange: () => void;
  private competitorIds: string[];

  constructor(public store: Store<fromCompetitorsStore.State>) {
    const getIds = this.store
        .select(fromCompetitorsStore.getIds)
        .subscribe(competitors => {
            this.competitorIds = Object.keys(competitors);
        });

    getIds.unsubscribe();
  }

  validate(control: AbstractControl) {

    const value = control.value;
    console.log(this.competitorIds);
    const isValdID = this.competitorIds.filter(it => {
        return +it === +value;
    }).length > 0 ? false : true;

    this.emitIsValdID.emit(isValdID);

    if (isValdID) {
        return null;
    }

    return { appIsValidConcept: { error: isValdID }};
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('appIsValidCompetitorId' in changes) {
      if (this._onChange) {
        this._onChange();
      }
    }
  }
}
