import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  AfterViewInit
} from '@angular/core';
import { Competitor } from '../../models/competitor';
import { popin } from '../../../core/animations/animations';

@Component({
  selector: 'app-competitor-item',
  templateUrl: './competitor-item.component.html',
  styleUrls: ['./competitor-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popin]
})

export class CompetitorItemComponent implements AfterViewInit {

  @Input() competitor: Competitor;
  @Output() competitorUpdated = new EventEmitter<Competitor>();
  @Output() competitorDeleted = new EventEmitter<Competitor>();

  public editMode = false;
  public competitorCopy: Competitor;

  constructor() {
  }

  ngAfterViewInit() {
    this.competitorCopy = JSON.parse(JSON.stringify(this.competitor));
  }

  updateCompetitor() {
    this.competitorUpdated.emit(this.competitorCopy);
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      // reset competitor value on edit cancel
      this.competitorCopy = this.competitor;
    }
  }

  deleteCompetitor() {
    this.competitorDeleted.emit(this.competitor);
  }
}
