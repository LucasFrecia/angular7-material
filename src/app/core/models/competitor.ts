export interface Competitor {
  Id: string;
  Codigo: string;
  Nombre: string;
  Calle: string;
  Latitud: number;
  Longitud: number;
  Marcador: boolean;
  Observar: boolean;
  MarcaId: number;
  ZonaDePrecioId: number;
}

interface Marcas {
  Id: number;
  Codigo: string;
  Nombre: string;
}

interface ZonaDePrecios {
  Id: number;
  Codigo: string;
  Nombre: string;
}
