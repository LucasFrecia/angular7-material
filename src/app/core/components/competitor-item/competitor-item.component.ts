import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Competitor } from '../../models/competitor';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { popin } from '../../../core/animations/animations';

@Component({
  selector: 'app-competitor-item',
  templateUrl: './competitor-item.component.html',
  styleUrls: ['./competitor-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [popin]
})

export class CompetitorItemComponent {

  @Input() competitor: Competitor;
  @Output() competitorUpdated = new EventEmitter<Competitor>();
  @Output() competitorDeleted = new EventEmitter<Competitor>();

  constructor() {}

  updateCompetitor() {

  }

  deleteCompetitor() {
    this.competitorDeleted.emit(this.competitor);
  }
}
