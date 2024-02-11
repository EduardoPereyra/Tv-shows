interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface External {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

interface Image {
  medium: string;
  original: string;
}

export interface TVShowData {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null | string;
  dvdCountry: null | string;
  externals: External;
  image: Image;
  summary: string;
  updated: number;
}

export class TVShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null | string;
  dvdCountry: null | string;
  externals: External;
  image: Image;
  summary: string;
  updated: number;

  constructor(jsonData: TVShowData) {
    this.id = jsonData.id;
    this.url = jsonData.url;
    this.name = jsonData.name;
    this.type = jsonData.type;
    this.language = jsonData.language;
    this.genres = jsonData.genres;
    this.status = jsonData.status;
    this.runtime = jsonData.runtime;
    this.averageRuntime = jsonData.averageRuntime;
    this.premiered = jsonData.premiered;
    this.ended = jsonData.ended;
    this.officialSite = jsonData.officialSite;
    this.schedule = jsonData.schedule;
    this.rating = jsonData.rating;
    this.weight = jsonData.weight;
    this.network = jsonData.network;
    this.webChannel = jsonData.webChannel;
    this.dvdCountry = jsonData.dvdCountry;
    this.externals = jsonData.externals;
    this.image = jsonData.image;
    this.summary = jsonData.summary;
    this.updated = jsonData.updated;
  }
}
