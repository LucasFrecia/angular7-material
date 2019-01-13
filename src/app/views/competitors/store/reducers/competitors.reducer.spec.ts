
import * as fromCompetitors from './competitors.reducer';
import * as competitorsActions from '../actions/competitors.actions';
import {Competitor} from '../../../../core/models/competitor';


fdescribe('Competitors state management', () => {

  let state: fromCompetitors.State;

  beforeEach(() => {

    state = {
      ids: ['1', '2'],
      entities: {
        '1': {
          Id: '1',
          Codigo: 'play',
          Nombre: 'Batistuta',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: true,
          Observar: false,
          MarcaId: 1,
          ZonaDePrecioId: 2
        },
        '2': {
          Id: '2',
          Codigo: 'play',
          Nombre: 'Crespo',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: false,
          Observar: true,
          MarcaId: 2,
          ZonaDePrecioId: 1
        }
      },
      selectedCompetitorId: '1'
    };

  });

  describe('Competitors state reducers', () => {

    it('should return init state when action is unknown', () => {
      const action = {} as any;
      const newState = fromCompetitors.reducer(undefined, action);
      expect(newState).toEqual(fromCompetitors.INIT_STATE);
    });


    it('should list competitors', () => {

      const competitors = {
        '1': {
          Id: '1',
          Codigo: 'play',
          Nombre: 'Batistuta',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: true,
          Observar: false,
          MarcaId: 1,
          ZonaDePrecioId: 2
        },
        '2': {
          Id: '2',
          Codigo: 'play',
          Nombre: 'Crespo',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: false,
          Observar: true,
          MarcaId: 2,
          ZonaDePrecioId: 1
        }
      };

      const action = new competitorsActions.CompetitorsListed(competitors);

      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.ids).toEqual(['1', '2']);
      expect(Object.values(newState.entities)).toEqual(Object.values(competitors));

    });


    it('should not add an existing competitor', () => {

      const competitor =  {
        Id: '2',
        Codigo: 'play',
        Nombre: 'Crespo',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      };


      const action = new competitorsActions.AddCompetitor(competitor);

      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.ids).toEqual(['1', '2']);

    });

    it('should add a new competitor', () => {

      const competitor =  {
        Id: '3',
        Codigo: 'play',
        Nombre: 'Tevez',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      };

      const action = new competitorsActions.AddCompetitor(competitor);
      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(3);
      expect(newState.ids).toEqual(['1', '2', '3']);
    });

    it('should update an existing competitor', () => {
      const competitor: Competitor = {
        Id: '2',
        Codigo: 'play',
        Nombre: 'Crespo Editado',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      };

      const action = new competitorsActions.UpdateCompetitor(competitor);

      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(2);
      expect(newState.entities[competitor.Id]).toEqual({
        Id: competitor.Id,
        Codigo: 'play',
        Nombre: 'Crespo Editado',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      });

    });

    it('should create an non existing competitor on update', () => {
      const competitor: Competitor = {
        Id: '4',
        Codigo: 'play',
        Nombre: 'Crespo Editado',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      };

      const action = new competitorsActions.UpdateCompetitor(competitor);

      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(3);
      expect(newState.entities[competitor.Id]).toEqual({
        Id: competitor.Id,
        Codigo: 'play',
        Nombre: 'Crespo Editado',
        Calle: '9 de Julio',
        Latitud: -34.6053348,
        Longitud: -58.3919066,
        Marcador: false,
        Observar: true,
        MarcaId: 2,
        ZonaDePrecioId: 1
      });

    });

    it('should delete a competitor', () => {
      const competitor = {
        Id: '2',
      } as Competitor;

      const action = new competitorsActions.DeleteCompetitor(competitor);

      const newState = fromCompetitors.reducer(state, action);

      expect(newState.ids.length).toEqual(1);
      expect(newState.entities[competitor.Id]).toBeUndefined();
    });


  });


  describe('Competitors state selectors', () => {

    it('should select current Id', () => {
      const slice = fromCompetitors.getSelectedId(state);
      expect(slice).toEqual('1');
    });

    it('should select entities', () => {
      const slice = fromCompetitors.getEntites(state);
      expect(slice).toEqual(state.entities);
    });

    it('should select ids', () => {
      const slice = fromCompetitors.getIds(state);
      expect(slice).toEqual(state.ids);
    });

    it('should select current competitor', () => {
      const slice = fromCompetitors.getSelected(state);
      expect(slice).toEqual(state.entities[state.selectedCompetitorId]);
    });

    it('should select all entities array', () => {
      const slice = fromCompetitors.getEntitesArray(state);
      expect(slice.length).toEqual(2);
      expect(slice).toEqual([
        {
          Id: '1',
          Codigo: 'play',
          Nombre: 'Batistuta',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: true,
          Observar: false,
          MarcaId: 1,
          ZonaDePrecioId: 2
        },
        {
          Id: '2',
          Codigo: 'play',
          Nombre: 'Crespo',
          Calle: '9 de Julio',
          Latitud: -34.6053348,
          Longitud: -58.3919066,
          Marcador: false,
          Observar: true,
          MarcaId: 2,
          ZonaDePrecioId: 1
        }
      ]);
    });

  });

});


