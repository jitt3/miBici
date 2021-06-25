import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Mapview, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useQuery} from 'react-query';
import {getStations} from '../../api/services';
import {Stations} from '../../api/services/bikes';
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
interface RegionI {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
function regionFrom(lat: number, lon: number, distance: number): RegionI {
  distance = distance / 2;
  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
    ),
  );

  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta,
    longitudeDelta,
  };
}
const Map: React.FC = () => {
  const [location, setLocation] = React.useState<RegionI>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const mapRef = useRef<Mapview>(null);
  const {data, isLoading} = useQuery<Stations, Error>('stations', getStations);

  React.useEffect(() => {
    const setUserLocation = () => {
      Geolocation.getCurrentPosition(
        info => {
          const {
            coords: {latitude, longitude},
          } = info;
          if (mapRef.current) {
            mapRef.current.animateCamera({
              center: {
                latitude,
                longitude,
              },
            });
          }
          const region = regionFrom(latitude, longitude, 50);

          setLocation(region);
        },
        error => {
          console.log(error, 'this is error');
        },
        {timeout: 20000, enableHighAccuracy: true},
      );
    };
    setUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Mapview
        ref={mapRef}
        style={styles.map}
        initialRegion={location}
        showsUserLocation={true}>
        {!isLoading &&
          data &&
          data.stations.map(station => {
            return (
              <Marker
                key={station.name}
                coordinate={{latitude: station.lat, longitude: station.lon}}
                description={station.name}
              />
            );
          })}
      </Mapview>
    </View>
  );
};

export default Map;
