export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }

export interface CurrentData {
    base: string;
    clouds: {
      all: number;
    };
    cod: number;
    coord: {
      lon: number;
      lat: number;
    };
    dt: number;
    id: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
      speed: number;
      deg: number;
    };
}

export interface FiveDataProps {
    list: Array<ListProps>;
    
}

interface TempProps {
    day: number;
    night:number;
    min:number;
    max:number;
}

 interface ListProps { 
    dt: number;
    id: number;
    sunrise: number;
    temp: TempProps
    weather: Weather[];
    wind: {
      speed: number;
      deg: number;
    };
    dt_txt: string;
}