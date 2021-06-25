import {getClient, responseBody} from '../configuration';

const stationsClient = getClient({headers: {}});
export interface Station {
  station_id: string;
  name: string;
  physical_configuration: string;
  lat: number;
  lon: number;
  altitude: number;
  address: string;
  post_code: string;
  capacity: number;
  rental_methods: string[];
  obcn: string;
  nearby_distance: string;
}
export interface Stations {
  stations: Station[];
}
const getStations = async (): Promise<Stations> => {
  const data = await stationsClient({
    url: '/station_information',
    method: 'get',
  });
  return responseBody(data);
};

export {getStations};
