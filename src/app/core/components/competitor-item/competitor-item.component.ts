import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Competitor } from '../../models/competitor';

@Component({
  selector: 'app-competitor-item',
  templateUrl: './competitor-item.component.html',
  styleUrls: ['./competitor-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CompetitorItemComponent {

  @Input() competitor: Competitor;
  @Output() competitorUpdated = new EventEmitter<Competitor>();
  @Output() competitorDeleted = new EventEmitter<Competitor>();

  constructor() {}

  updateCompetitor() {

  }

  deleteCompetitor() {

  }
}
