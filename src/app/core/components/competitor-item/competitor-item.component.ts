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
@Component({
  selector: 'app-competitor-item',
  templateUrl: './competitor-item.component.html',
  styleUrls: ['./competitor-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
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
