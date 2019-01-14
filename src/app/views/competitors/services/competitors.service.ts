import { Injectable } from '@angular/core';

@Injectable()
export class CompetitorsService {
  constructor() {}

  // These methods will be called by ngrx effects (do not use directly in the components)
  listCompetitors() {}

  addCompetitor(competitor) {}

  updateCompetitor(competitor) {}

  deleteCompetitor(competitor) {}
}
